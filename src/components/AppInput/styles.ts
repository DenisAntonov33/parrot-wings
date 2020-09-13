import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { kw } from '../../constants/sizes';

export default StyleSheet.create({
  contianer: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.textPrimary,
    borderWidth: 0,
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
  },
  inputContainerStyle: {
    height: 50,
    paddingTop: 5,
  },
  input: {
    color: colors.textPrimary,
    flex: 1,
    fontSize: 16,
    lineHeight: 19,
    paddingBottom: 7,
    height: '100%',
    width: '100%',
  },
  inputLabel: {
    alignSelf: 'flex-start',
    color: 'gray',
    fontSize: 12 * kw,
    lineHeight: 22,
    letterSpacing: 0.35,
  },
  error: {
    alignSelf: 'flex-start',
    color: colors.error,
    fontSize: 12 * kw,
    lineHeight: 22,
    letterSpacing: 0.35,
  },
  mb5: {
    marginBottom: 5,
  },
  flex1: {
    flex: 1,
  },
});
