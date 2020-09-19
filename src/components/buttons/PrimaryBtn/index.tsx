import React, { memo } from 'react';
import {
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  TextStyle,
} from 'react-native';
import styles from './styles';

interface Props extends TouchableOpacityProps {
  title?: string;
  titleStyle?: TextStyle;
  disableTitleStyle?: TextStyle;
}

const PrimaryBtn: React.FC<Props> = memo((props) => {
  const {
    title,
    style,
    children,
    titleStyle,
    disableTitleStyle,
    ...propsRest
  } = props;
  return (
    <TouchableOpacity
      style={[
        propsRest.disabled ? styles.btnDisabled : styles.btnNormal,
        style,
      ]}
      {...propsRest}
    >
      {Boolean(title) && (
        <Text
          style={
            propsRest.disabled
              ? [styles.textDisabled, disableTitleStyle]
              : [styles.text, titleStyle]
          }
        >
          {title}
        </Text>
      )}
      {Boolean(children) && children}
    </TouchableOpacity>
  );
});

export default PrimaryBtn;
