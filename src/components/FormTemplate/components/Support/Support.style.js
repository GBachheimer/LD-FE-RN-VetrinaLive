import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  support: {
    flexDirection: 'row',
    backgroundColor: colors.light.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: colors.light.green,
    marginTop: 10,
    width: 120,
    height: 50,
    shadowColor: colors.light.text,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  supportText: {
    color: colors.light.newText,
    fontWeight: 'bold',
    fontSize: 14,
  },
  supportImg: {
    marginRight: 10,
  },
  icon: {
    marginRight: 8,
  },
});
