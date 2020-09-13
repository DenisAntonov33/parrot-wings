import { AxiosPromise } from 'axios';
import { apiInstance } from '../../constants/ApiInstance';
import { SignInPayload, AuthResponse, SignUpPayload } from './types';

export const signUp = (data: SignUpPayload): AxiosPromise<AuthResponse> => {
  return apiInstance({
    method: 'post',
    url: `/users`,
    data,
  });
};

export const signIn = (data: SignInPayload): AxiosPromise<AuthResponse> => {
  return apiInstance({
    method: 'post',
    url: `/sessions/create`,
    data,
  });
};
