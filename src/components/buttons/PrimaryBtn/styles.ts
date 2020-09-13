import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import { borderRad, kh, kw } from '../../../constants/sizes';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNormal: {
    alignItems: 'center',
    backgroundColor: '#536FFF',
    borderRadius: borderRad,
    height: 36 * kh,
    justifyContent: 'center',
    width: 200 * kw,
  },
  btnDisabled: {
    alignItems: 'center',
    backgroundColor: colors.disabled,
    borderRadius: borderRad,
    height: 36 * kh,
    justifyContent: 'center',
    width: 200 * kw,
  },
  text: {
    color: colors.white,
    fontSize: 14 * kw,
  },
  textDisabled: {
    color: colors.disabledText,
    fontSize: 14 * kw,
  },
});
