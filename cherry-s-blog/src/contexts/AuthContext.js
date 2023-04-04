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
        const result = await authService.logout();
        console.log(result);
        setAuth({})
    }

    const context = {
        auth,
        userId: auth._id,
        token: auth.accessToken,
        isAuthenticated: !!auth.accessToken,
        onLoginHandler,
        onRegisterHandler,
        onLogoutHandler
    }

    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    );
}