import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 150,
    padding: 15,
  },
  backButton: {
    width: 150,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.light.blue,
  },
  backButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  buttonText: {
    fontSize: 16,
    color: colors.light.newText,
  },
  title: {
    fontSize: 28,
    color: colors.light.newText,
    marginTop: 30,
  },
});
