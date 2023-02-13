import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    textAlign: 'center',
    padding: 15,
    backgroundColor: colors.light.blue,
    borderRadius: 5,
    marginRight: 15,
  },
  text: {
    padding: 5,
    paddingLeft: 15,
    color: colors.light.strongGrey,
  },
  toggle: {
    width: '30%',
  },
});
