import { useState } from "react"


export function useForm(initialData, submitHandler) {
    const [values, setValues] = useState(initialData);
    const [isValid, setIsValid] = useState({});
    const [isError, setIsError] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false);

    function changeValues(e) {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    function onSubmitClick(e) {
        e.preventDefault();
        submitHandler(values, setIsError);
        setValues(initialData);
    }

    function editValues(newValues) {
        setValues(newValues)
    }

    function validateData(e) {
        let errMessage = "";
        let passMatch = "";
        switch (e.target.name) {
            case "username":
                if ((e.target.value.length > 0 && e.target.value.length < 2)) {
                    errMessage = "Username must contain at least 2 symbols."
                    setIsDisabled(true)
                } else {
                    errMessage = ""
                    setIsDisabled(false)
                }
                break;
            case "imageUrl":
                if ((e.target.value.length > 0)) {
                    const regex = /https?:\/\//gm;
                    const isMatch = regex.test(e.target.value);
                    const regex2 = /\//gm;
                    const isMatch2 = regex2.test(e.target.value);
                    if (!isMatch) {
                        errMessage = "Invalid image."
                        setIsDisabled(true)
                    } else if (!isMatch2) {
                        errMessage = "Invalid image."
                        setIsDisabled(true)
                    }
                } else {
                    errMessage = ""
                    setIsDisabled(false)
                }
                break;
            case "location":
                if ((e.target.value.length > 0 && e.target.value.length < 2)) {
                    errMessage = "Location must contain at least 2 symbols."
                    setIsDisabled(true)
                } else {
                    errMessage = ""
                    setIsDisabled(false);
                }
                break;
            case "title":
            case "ingredients":
            case "method":
                if ((e.target.value.length < 3)) {
                    errMessage = `
                    ${e.target.name[0].toUpperCase() + e.target.name.slice(1)
                        } must contain at least 3 symbols.`
                    setIsDisabled(true)
                } else {
                    errMessage = ""
                    setIsDisabled(false);
                }
                break;
            case "password":
            case "rePass":
                if (e.target.value === "") {
                    errMessage = `Password is a must!`

                    setIsDisabled(true)
                } else if (e.target.value !== values.password || e.target.value !== values.rePass) {
                    passMatch = "Password missmatch!";
                    setIsDisabled(true)
                } else {
                    passMatch = ""
                    errMessage = ""
                    setIsDisabled(false);
                }
                break;
            case "email":
                if (e.target.value === "") {
                    errMessage = `Email is a must!`;
                } else if (!e.target.value.includes('@')) {
                    errMessage = `Email is a not valid!`;
                } else {
                    errMessage = ""
                }
                break;
            default:
                break;
        }
        
        setIsValid(state => (
            { ...state, [e.target.name]: errMessage, passMatch }))
    }

    return {
        values,
        changeValues,
        onSubmitClick,
        isError,
        validateData,
        isValid,
        isDisabled,
        editValues
    };
}
