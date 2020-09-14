import { StyleSheet } from 'react-native';
import colors from './colors';
import { containerHorizontalPadding } from './sizes';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    padding: containerHorizontalPadding,
  },
  formContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '500',
  },
  mainText: {
    color: colors.textPrimary,
    fontSize: 14,
  },
  accentText: {
    color: colors.primary,
    fontSize: 14,
  },
});
