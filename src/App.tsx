import { Provider } from 'mobx-react';
import React from 'react';
import NavigationContainer from './navigation/NavigationContainer';
import Auth from './modules/auth/mobx/Auth';
import Common from './mobx/Common';

const store = {
  auth: Auth,
  common: Common,
};

export default () => (
  <Provider {...store}>
    <NavigationContainer />
  </Provider>
);
