import { requestFactory } from "./requester"

const baseURL = "http://localhost:3030/data/recipes"

export function recipesServiceFactory(token) {
    const request = requestFactory(token);

    function getAll() {
        return request.get(baseURL);
    }

    function getOne(recipeId) {
        return request.get(`${baseURL}/${recipeId}`);
    }

    function getCherryCake() {
        const query = encodeURIComponent('title="Cherry cake"');
        return request.get(`${baseURL}?where=${query}`);
    }

    function create(data) {
        return request.post(baseURL, data);
    }    

    return {
        getAll,
        getOne,
        getCherryCake,
        create,
    }
}