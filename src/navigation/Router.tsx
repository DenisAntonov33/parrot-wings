import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from '../modules/auth/navigation/AuthNavigation';
import CabinetNavigation from '../modules/cabinet/navigation/CabinetNavigation';
import Auth from '../modules/auth/mobx/Auth';
import NavigationService from '../constants/NavigationService';
import { inject, observer } from 'mobx-react';

interface Props {
  navigation?: StackNavigationProp<any>;
  auth?: typeof Auth;
}

const Stack = createStackNavigator();

const Router: React.FC<Props> = (props) => {
  const { token } = props.auth!;
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Stack.Navigator>
        {!token && (
          <Stack.Screen
            name={'auth'}
            children={AuthNavigation}
            options={{
              headerShown: false,
            }}
          />
        )}
        {Boolean(token) && (
          <Stack.Screen
            name={'cabinet'}
            children={CabinetNavigation}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default inject('auth')(observer(Router));
