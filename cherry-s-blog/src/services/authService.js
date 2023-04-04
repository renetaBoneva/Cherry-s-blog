
import { requestFactory } from "./requester"

const baseURL = "http://localhost:3000/users"

export function authServiceFactory(token) {
    const request = requestFactory(token);

    function postLogin(loginData){
        return request.post(`${baseURL}/login`, loginData) 
    }

    function postRegister(registerData){
        return request.post(`${baseURL}/register`, registerData) 
    }

    return {
        postLogin,
        postRegister,
    }
}