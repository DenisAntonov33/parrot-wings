import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { CabinetRoutes, CabinetStackParamList } from '../types';
import Home from '../screens/Home';
import GoBackBtn from '../../../components/buttons/GoBackBtn';

const Stack = createStackNavigator<CabinetStackParamList>();

interface Props {
  navigation: StackNavigationProp<CabinetStackParamList>;
}

const CabinetNavigation: React.FC<Props> = (props) => {
  const { navigation } = props;
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Stack.Navigator
      initialRouteName={CabinetRoutes.home}
      screenOptions={{
        headerLeft: () => <GoBackBtn onPress={goBack} />,
      }}
    >
      <Stack.Screen name={CabinetRoutes.home} component={Home} />
    </Stack.Navigator>
  );
};

export default CabinetNavigation;
