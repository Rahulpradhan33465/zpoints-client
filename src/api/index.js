import axios from 'axios';

const API = axios.create({ baseURL: 'https://pzeros-server.herokuapp.com/' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post('/api/signin', formData);
export const signUp = (formData) => API.post('/api/signup', formData);
