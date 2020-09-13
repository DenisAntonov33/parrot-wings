export enum AuthRoutes {
  logIn = 'auth/logIn',
  signUp = 'auth/signUp',
}

export type AuthStackParamList = {
  [AuthRoutes.logIn]: undefined;
  [AuthRoutes.signUp]: undefined;
};

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload extends SignInPayload {
  username: string;
}

export interface AuthResponse {
  id_token: string;
}
