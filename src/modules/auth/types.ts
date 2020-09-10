export enum AuthRoutes {
    logIn = 'auth/logIn',
    signUp = 'auth/signUp',
};

export type AuthStackParamList = {
    [AuthRoutes.logIn]: undefined;
    [AuthRoutes.signUp]: undefined;
};
