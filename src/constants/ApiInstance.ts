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

apiInstance.interceptors.response.use((response) => {
  if (response.status === 404) {
    auth.signOut();
  }
  return response;
});

export const setToken = (token: string) => {
  if (apiInstance) {
    const headers = apiInstance.defaults.headers;
    headers['Authorization'] = `Bearer ${token}`;
  }
};
