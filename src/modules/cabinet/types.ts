export enum CabinetRoutes {
  home = 'auth/home',
}

export type CabinetStackParamList = {
  [CabinetRoutes.home]: undefined;
};

export interface User {
  id: string;
  name: string;
}

export interface UserFull extends User {
  email: string;
  balance: string;
}

export interface Transaction {
  id: string;
  date: string;
  username: string;
  amount: string;
  balance: string;
}

export interface CreateTransactionPayload {
  name: string;
  amount: string;
}
