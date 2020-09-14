import { AxiosPromise } from 'axios';
import { apiInstance } from '../../constants/ApiInstance';
import { CreateTransactionPayload, Transaction, User, UserFull } from './types';

export const getUserInfo = (): AxiosPromise<{ user_info_token: UserFull }> => {
  return apiInstance({
    method: 'get',
    url: `/api/protected/user-info`,
  });
};

export const getUserList = (data: { filter: string }): AxiosPromise<User[]> => {
  return apiInstance({
    method: 'post',
    url: `/api/protected/users/list`,
    data,
  });
};

export const getTransactions = (): AxiosPromise<{
  trans_token: Transaction[];
}> => {
  return apiInstance({
    method: 'get',
    url: `/api/protected/transactions`,
  });
};

export const createTransaction = (
  data: CreateTransactionPayload
): AxiosPromise<any> => {
  return apiInstance({
    method: 'post',
    url: `/api/protected/transactions`,
    data,
  });
};
