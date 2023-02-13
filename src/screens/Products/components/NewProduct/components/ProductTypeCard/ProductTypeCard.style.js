import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    width: '100%',
    padding: 20,
    color: colors.light.newText,
    fontWeight: 'bold',
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15,
  },
  text: {
    fontSize: 18,
    color: colors.light.newText,
  },
  radioView1: {
    transform: [{ scale: 1.5 }],
    marginRight: 10,
  },
  radioView2: {
    transform: [{ scale: 1.5 }],
    marginRight: 10,
    marginLeft: 20,
  },
});
