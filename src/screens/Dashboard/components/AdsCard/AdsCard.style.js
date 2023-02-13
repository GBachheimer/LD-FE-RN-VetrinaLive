import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  green: {
    color: colors.light.green,
  },
  white: {
    color: colors.light.white,
  },
  bold: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 26,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
  },
  divider: {
    borderBottomColor: colors.light.white,
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    width: '100%',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  link: {
    textDecorationLine: 'underline',
    marginRight: 20,
  },
  footer: {
    color: colors.light.white,
    marginBottom: 10,
    width: '100%',
  },
});
