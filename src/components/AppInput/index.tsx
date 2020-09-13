import React, {
  forwardRef,
  useCallback,
  MutableRefObject,
  useState,
} from 'react';
import { TextInput, View, Text, ViewStyle, TextInputProps } from 'react-native';
import styles from './styles';
import ClearBtn from '../buttons/ClearBtn';
import colors from '../../constants/colors';
import { useCombinedRefs } from '../../hooks/useCombinedRef';

interface Props extends TextInputProps {
  style?: ViewStyle;
  error?: string;
  hasCleatBtn?: boolean;
  onClearBtnPress?: () => void;
}

export type Ref = MutableRefObject<TextInput>;

const AppInput: React.FC<Props> = forwardRef<Ref, Props>((props, ref) => {
  const innerRef = React.useRef(null);
  const combinedRef = useCombinedRefs(ref, innerRef);

  const { style, error, onClearBtnPress, hasCleatBtn, ...propsRest } = props;

  const [isFocused, setFocusState] = useState(false);
  const clearBtnHandler = useCallback(() => {
    onClearBtnPress
      ? onClearBtnPress()
      : propsRest.onChangeText && propsRest.onChangeText('');
    combinedRef.current?.focus();
  }, [onClearBtnPress, propsRest.onChangeText]);

  const blurHandler = useCallback(() => {
    setFocusState(false);
  }, []);

  const focusHandler = useCallback(() => {
    setFocusState(true);
  }, [props.onFocus]);

  return (
    <>
      <View
        style={[
          styles.contianer,
          {
            borderBottomColor: isFocused ? colors.primary : colors.secondary,
          },
          style,
        ]}
      >
        <View style={styles.flex1}>
          <TextInput
            ref={combinedRef}
            onFocus={focusHandler}
            onBlur={blurHandler}
            {...propsRest}
          />
        </View>
        {hasCleatBtn && props.value ? (
          <ClearBtn onPress={clearBtnHandler} />
        ) : (
          <View />
        )}
      </View>
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </>
  );
});

export default AppInput;
