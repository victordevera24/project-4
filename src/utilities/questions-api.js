import sendRequest from './send-request';

const BASE_URL = '/api/questions'

export function addQuestion(question){
    console.log('add question')
    return sendRequest(`${BASE_URL}/create`, 'POST', question);
}

export function getAll() {
    console.log('get all question api')
    return sendRequest(BASE_URL);
}

export function getQuestion(id){
    console.log('in api', id)
    return sendRequest(`${BASE_URL}/find/${id}`)
}
