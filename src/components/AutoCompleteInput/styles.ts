import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

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
  itemBtn: {
    height: 30,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  container: {
    position: 'relative',
  },
});
