import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  helpPerson: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: colors.light.blue,
    borderRadius: 5,
    shadowColor: colors.light.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 1.62,
    elevation: 2,
    height: 50,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.light.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginRight: 10,
  },
});
