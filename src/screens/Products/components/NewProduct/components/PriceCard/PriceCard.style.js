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
    padding: 10,
    borderColor: colors.light.grey,
    flex: 1,
  },
  inputWithIcon: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.light.grey,
    padding: 10,
    paddingLeft: 40,
  },
  inputContainer: {
    width: '100%',
    padding: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  checkBoxScale: {
    transform: [{ scale: 1.5 }],
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    fontSize: 18,
    color: colors.light.strongGrey,
    marginBottom: 10,
  },
  checkBoxLabel: {
    fontSize: 18,
    color: colors.light.newText,
    marginLeft: 15,
  },
  icon: {
    paddingLeft: 15,
    paddingTop: 13,
    position: 'absolute',
  },
});
