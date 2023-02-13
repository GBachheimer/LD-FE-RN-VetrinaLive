import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
  },
  tinyLogo: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  orderNr: {
    width: '50%',
    fontSize: 18,
    color: colors.light.newText,
  },
  print: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  printText: {
    color: colors.light.blue,
    fontSize: 16,
  },
  close: {
    width: 80,
  },
  closeIcon: {
    marginLeft: 55,
  },
});
