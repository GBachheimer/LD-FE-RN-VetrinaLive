import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  submit: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light.blue,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
    height: 48,
  },
  submitText: {
    color: 'white',
  },
  redirect: {
    color: colors.light.blue,
  },
  formFooter: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 48,
  },
  resetPass: {
    marginTop: 20,
    color: colors.light.blue,
  },
});
