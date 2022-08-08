import axios from 'axios';

// request interceptors
axios.interceptors.request.use(
  (config) => {
    config.headers.common['Authorization'] =
      window.localStorage.getItem('_token') || '';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptors
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    alert('Server Access Error');
    return Promise.reject(error);
  }
);
export default {
  get: (url) => axios.get(url),
  post: (url, data) => axios.post(url, data),
};
