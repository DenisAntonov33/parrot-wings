import React from 'react';
import { StyleSheet, TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { containerHorizontalPadding } from '../../../constants/sizes';

interface Props extends TouchableOpacityProps {}

const GoBackBtn: React.FC<Props> = ({ style, ...props }) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} {...props}>
      <AntDesign name="left" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginLeft: containerHorizontalPadding,
  },
});

export default GoBackBtn;
