import sendRequest from "./send-request";

const BASE_URL = '/api/comments'

export function addComment(comment){
    return sendRequest(`${BASE_URL}/create`, 'POST', comment)
}

export function getAll(id) {
    return sendRequest(BASE_URL)
}