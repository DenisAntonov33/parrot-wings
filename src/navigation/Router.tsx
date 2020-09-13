import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from '../modules/auth/navigation/AuthNavigation';
import NavigationService from '../constants/NavigationService';

interface Props {
  navigation?: StackNavigationProp<any>;
}

const Stack = createStackNavigator();

const Router: React.FC<Props> = (props) => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name={'auth'}
          children={AuthNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
