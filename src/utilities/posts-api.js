import sendRequest from './send-request';

const BASE_URL = '/api/posts';

export function create(postData) {
  return sendRequest(BASE_URL, 'POST', postData);
}

export function getCat(category) {
  return sendRequest(`${BASE_URL}/all/${category}`);
}

export function getAll() {
  return sendRequest(`${BASE_URL}/all`);
}

export function detail(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}