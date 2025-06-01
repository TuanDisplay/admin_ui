import axios from "axios";

const adminRequest = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_ADMIN,
});

adminRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers['x-token'] = token;
  }
  return config;
});

export const get = async (path: string, options = {}) => {
  const response = await adminRequest.get(path, options);
  return response.data;
};

export const post = async (path: string, data = {}, options = {}) => {
  const response = await adminRequest.post(path, data, options);
  return response.data;
};

export const put = async (path: string, data = {}, options = {}) => {
  const response = await adminRequest.put(path, data, options);
  return response.data;
};


export default adminRequest;