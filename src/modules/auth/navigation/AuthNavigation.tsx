import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthRoutes, AuthStackParamList } from '../types';
import Login from '../screens/Login'
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigation = (props: any) => {
  return (
    <Stack.Navigator
      initialRouteName={AuthRoutes.logIn}
    >
      <Stack.Screen name={AuthRoutes.logIn} component={Login} />
      <Stack.Screen name={AuthRoutes.signUp} component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
