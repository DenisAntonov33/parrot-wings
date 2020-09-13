import { Provider } from 'mobx-react';
import React from 'react';
import NavigationContainer from './navigation/NavigationContainer';
import Auth from './modules/auth/mobx/Auth';
import Cabinet from './modules/cabinet/mobx/Cabinet';
import Common from './mobx/Common';

const store = {
  auth: Auth,
  common: Common,
  cabinet: Cabinet,
};

export default () => (
  <Provider {...store}>
    <NavigationContainer />
  </Provider>
);
