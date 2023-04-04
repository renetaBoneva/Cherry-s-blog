import { useState } from "react"


export function useForm(initialData, submitHandler){
    const [values, setValues] = useState(initialData);

    function chnageValues(e) {        
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    function onSubmitClick(e) {
        e.preventDefault();

        submitHandler(values);
    }

    return {values, chnageValues, onSubmitClick};
}