import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 110,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: 120,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.light.lightBlue,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
  },
  buttonText: {
    color: colors.light.strongGrey,
    fontSize: 16,
  },
});
