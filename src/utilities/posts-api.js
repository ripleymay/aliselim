const BASE_URL = '/api/posts';

export function create(postData) {
  return sendRequest(BASE_URL, 'POST', postData);
}