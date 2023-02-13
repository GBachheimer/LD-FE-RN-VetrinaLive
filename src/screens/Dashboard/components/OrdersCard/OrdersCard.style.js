import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  visitors: {
    fontSize: 50,
    color: colors.light.newText,
    fontWeight: 'bold',
  },
  periodOption: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  ordersRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  text: {
    fontSize: 16,
    color: colors.light.strongGrey,
  },
  numbers: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.light.newText,
  },
});
