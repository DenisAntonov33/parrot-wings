import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CabinetRoutes, CabinetStackParamList } from '../types';
import Home from '../screens/Home';
import History from '../screens/History';
import DrawerContent from '../screens/DrawerContent';
import BurgerBtn from '../../../components/buttons/BurgerBtn';

const Stack = createStackNavigator<CabinetStackParamList>();
const Drawer = createDrawerNavigator();

function Cabinet() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerType="front"
    >
      <Drawer.Screen name={'someRoute'} component={CabinetInner} />
    </Drawer.Navigator>
  );
}

interface Props {
  navigation: StackNavigationProp<CabinetStackParamList>;
}

const CabinetInner: React.FC<Props> = (props) => {
  return (
    <Stack.Navigator
      initialRouteName={CabinetRoutes.home}
      screenOptions={{
        headerShown: true,
        headerLeft: () => <BurgerBtn />,
      }}
    >
      <Stack.Screen name={CabinetRoutes.home} component={Home} />
      <Stack.Screen name={CabinetRoutes.history} component={History} />
    </Stack.Navigator>
  );
};

export default Cabinet;
