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
  input: {
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
    padding: 10,
    borderColor: colors.light.grey,
  },
  inputContainer: {
    width: '100%',
    padding: 20,
  },
  descriptionOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.light.grey,
    height: 40,
  },
  descriptionBox: {
    padding: 10,
  },
  label: {
    fontSize: 18,
    color: colors.light.strongGrey,
  },
});
