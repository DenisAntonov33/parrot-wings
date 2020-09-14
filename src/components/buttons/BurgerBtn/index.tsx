import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

const BurgerBtn = ({ ...props }: StackHeaderLeftButtonProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    >
      <View style={styles.hamburger}>
        <Feather name="menu" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default BurgerBtn;
