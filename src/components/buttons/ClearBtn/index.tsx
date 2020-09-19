import React, { memo } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const ClearBtn: React.FC<TouchableOpacityProps> = memo(
  ({ style, ...props }) => {
    return (
      <TouchableOpacity style={style} {...props}>
        <AntDesign name="closecircle" size={24} color="black" />
      </TouchableOpacity>
    );
  }
);

export default ClearBtn;
