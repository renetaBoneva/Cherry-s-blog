import { requestFactory } from "./requester"

const baseUrl = "http://localhost:3030/data/comments";

export function commentsServiceFactory(token) {
    const request = requestFactory(token);

    async function getCommentsForRecipe(recipeId) {
        const searchQuery = encodeURIComponent(`recipeId="${recipeId}"`);
        const userQuery = encodeURIComponent(`auth=_ownerId:users`);

        const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${userQuery}`);
        return result;
    }


    async function getCommentsForUser(userId) {
        const searchQuery = encodeURIComponent(`_ownerId="${userId}"`);

        const result = await request.get(`${baseUrl}?where=${searchQuery}`);
        return result;
    }

    async function patchCommentOwnerData(commentId, data) {
        const result = await request.patch(`${baseUrl}/${commentId}`, { editedOwnerInfo: data });
        return result;
    }

    async function create(recipeId, data) {
        const result = await request.post(`${baseUrl}`, { recipeId, ...data })
        return result
    }

    return {
        getCommentsForRecipe,
        getCommentsForUser,
        patchCommentOwnerData,
        create
    }
}