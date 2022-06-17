import sendRequest from './send-request';

const BASE_URL = '/api/questions'

export function addQuestion(question){
    return sendRequest(`${BASE_URL}/create`, 'POST', question);
}