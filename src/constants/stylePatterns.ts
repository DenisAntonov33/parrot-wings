import { StyleSheet } from 'react-native';
import colors from './colors';
import { containerHorizontalPadding } from './sizes';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: containerHorizontalPadding,
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
});
