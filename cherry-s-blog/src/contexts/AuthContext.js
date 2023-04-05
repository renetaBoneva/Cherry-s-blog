import { createContext } from "react";
import { useNavigate } from 'react-router-dom';


import { useLocalStorage } from "../hooks/useLocalStorage";
import { authServiceFactory } from "../services/authService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth] = useLocalStorage("auth", {});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken);

    async function onLoginHandler(loginData) {
        let result = auth;
        try {
            result = await authService.postLogin(loginData);
        } catch (err) {
            return console.log(err.message);
        }

        const { password, rePass, ...userData } = result;
        setAuth(userData);
        navigate('/catalog');
    }

    async function onRegisterHandler(registerData) {
        let result = auth;
        try {
            result = await authService.postRegister(registerData);
        } catch (err) {
            return console.log(err.message);
        }

        const { password, rePass, ...userData } = result;
        setAuth(userData);
        navigate('catalog')
    }

    async function onLogoutHandler(){
        await authService.logout();
        setAuth({})
    }

    async function getDetails() {
        const result = await authService.getUserDetails();
        return result;
    }

    async function EditUserProfile(data) {
        console.log('//TODO validate data');
        console.log('//TODO change server data');

        const updatedAuth = {...auth, ...data};
        
        setAuth(updatedAuth);
        navigate(`/users/${auth._id}/profile`)
    }

    const context = {
        auth,
        userId: auth._id,
        token: auth.accessToken,
        isAuthenticated: !!auth.accessToken,
        onLoginHandler,
        onRegisterHandler,
        onLogoutHandler,
        getDetails,
        EditUserProfile,
    }

    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    );
}