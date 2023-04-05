import { requestFactory } from "./requester"

const baseURL = "http://localhost:3030/data/recipes"

export function recipesServiceFactory(token) {
    const request = requestFactory(token);

    function getAll() {
        return request.get(baseURL);
    }

    function create(data) {
        return request.post(baseURL, data);
    }    

    return {
        getAll,
        create,
    }
}