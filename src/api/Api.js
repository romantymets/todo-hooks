import axios from  "axios";
const instance = axios.create({
  baseURL: `/api/v1`,
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

const get = (url, queryParams) => instance.get(`${url}`);
const post = (url, params) => instance.post(url, params);
const patch = (url, params) => instance.patch(url, params);
const remove = (url) => instance.delete(url);

export default { get, post, patch, remove };
