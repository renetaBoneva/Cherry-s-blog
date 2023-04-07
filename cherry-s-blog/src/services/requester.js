import { logDOM } from "@testing-library/react";

async function requester(method, token, url, data) {
    let options = {};
    if (method !== "GET") {
        options.method = method;
        if (data) {
            options.headers = {
                "Content-Type": "application/json"
            }
            options.body = JSON.stringify(data);
        }
    }

    const serializedToken = localStorage.getItem('auth');
    if (serializedToken) {
        const auth = JSON.parse(serializedToken);
        if (auth.accessToken) {
            options.headers = {
                ...options.headers,
                "X-Authorization": auth.accessToken
            }
        }
    }

    const res = await fetch(url, options);
    if (res.status === 204) {
        return {}
    }
    const result = await res.json();
    if (!res.ok) {
        throw result;
    }

    return result;
}

export function requestFactory(token) {
    return {
        get: requester.bind(null, "GET", token),
        post: requester.bind(null, "POST", token),
        put: requester.bind(null, "PUT", token),
        patch: requester.bind(null, "PATCH", token),
        del: requester.bind(null, "DELETE", token)
    }
}