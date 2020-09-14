import { action, observable } from 'mobx';
import { alertMessage } from '../../../constants/utils';
import common from '../../../mobx/Common';
import { Transaction, User, UserFull } from '../types';
import {
  createTransaction,
  getTransactions,
  getUserInfo,
  getUserList,
} from '../api';

class Cabinet {
  @observable currentUser: UserFull | null = null;
  @observable userList: User[] = [];
  @observable transactions: Transaction[] = [];
  @observable recipient: User | null = null;
  @observable transactionAmount: string = '';

  @action
  setCurrentUser = (value: UserFull) => {
    this.currentUser = value;
  };

  @action
  setRecipient = (value: User | null) => {
    this.recipient = value;
  };

  @action
  setTransactionAmount = (value: string) => {
    this.transactionAmount = value;
  };

  @action
  setUserList = (value: User[]) => {
    this.userList = value;
  };

  @action
  fetchUserInfo = async () => {
    try {
      common.setLoading(true);
      const res = await getUserInfo();
      this.setCurrentUser(res.data.user_info_token);
    } catch (err) {
      alertMessage(err.response.data, 'Error');
    } finally {
      common.setLoading(false);
    }
  };

  @action
  fetchUserList = async (query: string) => {
    try {
      if (!query) {
        return;
      }
      const res = await getUserList({ filter: query });
      this.setUserList(res.data);
    } catch (err) {
      alertMessage(err.response.data, 'Error');
    }
  };

  @action
  createTransaction = async (payload: { name: string; amount: string }) => {
    try {
      common.setLoading(true);
      await createTransaction(payload);
      this.fetchUserInfo();
    } catch (err) {
      alertMessage(err.response.data, 'Error');
    } finally {
      common.setLoading(false);
    }
  };

  @action
  setTransactions = (value: Transaction[]) => {
    this.transactions = value;
  };

  @action
  fetchTransactions = async () => {
    try {
      common.setLoading(true);
      const res = await getTransactions();
      this.setTransactions(res.data.trans_token);
    } catch (err) {
      alertMessage(err.response.data, 'Error');
    } finally {
      common.setLoading(false);
    }
  };
}

const cabinet = new Cabinet();
export default cabinet;
