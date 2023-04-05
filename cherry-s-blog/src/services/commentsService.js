import { requestFactory } from "./requester"

const baseUrl = "http://localhost:3030/data/comments";

export function commentsServiceFactory(token) {
    const request = requestFactory(token);

    async function getCommentsForRecipe(recipeId) {
        const query = encodeURIComponent(`recipeId="${recipeId}"`);
        const result = await request.get(`${baseUrl}?where=${query}`)
        
        return result;
    }

    async function create(recipeId, data) {
        const result = await request.post(`${baseUrl}`, {_id: recipeId, ...data})
        return result
    }

    return {
        getCommentsForRecipe,
        create
    }
}