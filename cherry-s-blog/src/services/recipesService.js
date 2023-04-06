import { requestFactory } from "./requester"

const baseURL = "http://localhost:3030/data/recipes";

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
        return request.get(`${baseURL}?load=${query}`);
    }

    function getUsersRecipes(_id) {
        const query = encodeURIComponent(`_ownerId="${_id}"`);
        return request.get(`${baseURL}?where=${query}`);

    }

    function create(data) {
        return request.post(baseURL, data);
    }   

    function edit( id, newData) {
        return request.put(`${baseURL}/${id}`, newData);
    }

    function del(recipeId) {
        return request.del(`${baseURL}/${recipeId}`);
    }    

    return {
        getAll,
        getOne,
        getCherryCake,
        getUsersRecipes,
        create,
        edit,
        del
    }
}