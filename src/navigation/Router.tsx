import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from '../modules/auth/navigation/AuthNavigation';

interface Props {
  navigation?: StackNavigationProp<any>;
}

const Stack = createStackNavigator();

const Router: React.FC<Props> = (props) => {
  return (
    <NavigationContainer>
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
