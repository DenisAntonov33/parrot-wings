import React, { useMemo } from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import styles from './styles';
import { observer, inject } from 'mobx-react';
import { CabinetRoutes, CabinetStackParamList } from '../../types';
import Auth from '../../../auth/mobx/Auth';
import auth from '../../../auth/mobx/Auth';
import colors from '../../../../constants/colors';

interface Props {
  navigation: StackNavigationProp<CabinetStackParamList>;
  auth?: typeof Auth;
}

const DrawerContent: React.FC<DrawerContentComponentProps & Props> = (
  props
) => {
  const drawerList = useMemo(() => {
    const { navigation } = props;
    return [
      { title: 'sign out', onPress: auth.signOut },
      {
        title: 'history',
        onPress: () => navigation.navigate(CabinetRoutes.history),
      },
    ];
  }, []);
  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        {drawerList.map((item, index) => {
          return (
            <DrawerItem
              key={index}
              label={item.title}
              labelStyle={{
                color: colors.textPrimary,
                fontSize: 16,
                fontWeight: 'bold',
              }}
              style={{
                height: 48,
                minWidth: '100%',
                marginLeft: 10,
                borderRadius: 0,
                marginBottom: 10,
              }}
              onPress={item.onPress}
            />
          );
        })}
      </DrawerContentScrollView>
    </View>
  );
};

export default inject('auth')(observer(DrawerContent));
