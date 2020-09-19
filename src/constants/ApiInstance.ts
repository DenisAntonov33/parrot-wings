import axios from 'axios';
import Constants from 'expo-constants';
import auth from '../modules/auth/mobx/Auth';

const headers: object = {};

export const apiInstance = axios.create({
  baseURL: Constants.manifest.extra.baseUrl,
  timeout: 20000,
  headers,
});

apiInstance.interceptors.request.use((request) => {
  request.headers.Authorization = 'Bearer ' + auth.token;
  return request;
});

apiInstance.interceptors.response.use(undefined, (error) => {
  if (error.response.status === 401) {
    auth.signOut();
  }
  return Promise.reject(error);
});

export const setToken = (token: string) => {
  if (apiInstance) {
    const headers = apiInstance.defaults.headers;
    headers['Authorization'] = `Bearer ${token}`;
  }
};
