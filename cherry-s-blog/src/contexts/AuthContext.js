import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';


import { useLocalStorage } from "../hooks/useLocalStorage";
import { authServiceFactory } from "../services/authService";
// import { commentsServiceFactory } from "../services/commentsService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth] = useLocalStorage("auth", {});;
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken);
    // const commentsService = commentsServiceFactory(auth.accessToken);

    async function onLoginHandler(loginData, setIsError) {
        let result = auth;
        try {
            result = await authService.postLogin(loginData);
        } catch (err) {
            return setIsError(err.message);
        }

        const { password, rePass, ...userData } = result;
        setAuth(userData);
        navigate('/catalog');
    }

    async function onRegisterHandler(registerData, setIsError) {
        let result = auth;
        try {
            result = await authService.postRegister(registerData);
        } catch (err) {
            return setIsError(err.message);
        }

        const { password, rePass, ...userData } = result;
        setAuth(userData);
        navigate('catalog')
    }

    async function onLogoutHandler() {
        await authService.logout();
        setAuth({})
    }

    async function getDetails() {
        try {
            const result = await authService.getUserDetails();
            return result;
        } catch(err) {
            return navigate('/catalog')
        }
    }

    async function EditUserProfile(data) {
        console.log('//TODO change server data');
        // const userComments = await commentsService.getCommentsForUser(auth._id);
        // userComments.map(commment => commentsService.patchCommentOwnerData(commment._id, data));

        const updatedAuth = { ...auth, ...data };

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
        setAuth
    }

    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    );
}