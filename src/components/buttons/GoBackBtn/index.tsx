import React, { memo } from 'react';
import { StyleSheet, TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { containerHorizontalPadding } from '../../../constants/sizes';

const GoBackBtn: React.FC<TouchableOpacityProps> = memo(
  ({ style, ...props }) => {
    return (
      <TouchableOpacity style={[styles.btn, style]} {...props}>
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  btn: {
    marginLeft: containerHorizontalPadding,
  },
});

export default GoBackBtn;
