import sendRequest from './send-request';

const BASE_URL = '/api/posts';

export function create(postData) {
  return sendRequest(BASE_URL, 'POST', postData);
}

export function getAll(category) {
  return sendRequest(`${BASE_URL}/${category}`);
}