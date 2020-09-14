import { StyleSheet } from 'react-native';

const rowHeight = 25;
const fontSize = 20;

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  col1: {
    fontSize,
    height: rowHeight,
    width: 200,
  },
  col2: {
    flex: 1,
    fontSize,
    height: rowHeight,
  },
  col3: {
    fontSize,
    height: rowHeight,
    width: 100,
    textAlign: 'right',
  },
  col4: {
    fontSize,
    height: rowHeight,
    textAlign: 'right',
    paddingRight: 20,
    width: 200,
  },
  repeatBtn: {
    width: rowHeight,
    height: rowHeight,
  },
  list: {
    width: '100%',
  },
});
