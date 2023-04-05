
import { requestFactory } from "./requester"

const baseURL = "http://localhost:3030/users";

export function authServiceFactory(token) {
    const request = requestFactory(token);

    function postLogin(loginData){
        return request.post(`${baseURL}/login`, loginData) 
    }

    function postRegister(registerData){
        return request.post(`${baseURL}/register`, registerData) 
    }

    function logout() {
        return request.get(`${baseURL}/register`)
    }

    function getUserDetails() {
        return request.get(`${baseURL}/me`);
    }
    
    return {
        postLogin,
        postRegister,
        logout,
        getUserDetails
    }
}