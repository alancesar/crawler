import axios from 'axios';

const API_URL = 'http://localhost:3000/crawler';

export function getAll() {
  return axios.get(API_URL).then(({ data }) => data);
}

export function get(id) {
  return axios.get(`${API_URL}/${id}`).then(({ data }) => data);
}

export function crawler(url, findExternalUrls = false) {
  return axios.post(API_URL, { url, findExternalUrls });
}
