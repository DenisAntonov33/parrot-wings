import axios from 'axios';
import Constants from 'expo-constants';

const headers: object = {};

export const apiInstance = axios.create({
  baseURL: Constants.manifest.extra.baseUrl,
  timeout: 20000,
  headers,
});

export const setToken = (token: string) => {
  if (apiInstance) {
    const headers = apiInstance.defaults.headers;
    headers['Authorization'] = `Bearer ${token}`;
  }
};
