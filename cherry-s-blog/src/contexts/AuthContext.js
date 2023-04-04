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
        try {
            const result = await authService.postLogin(loginData);
            setAuth(result);
            navigate('/catalog');
        } catch (err) {
            return console.log(err.message);
        }
    }

    const context = {
        token: auth.accessToken,
        onLoginHandler,
    }

    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    );
}