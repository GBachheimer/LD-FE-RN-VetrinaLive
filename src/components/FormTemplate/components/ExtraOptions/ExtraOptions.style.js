import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  submitText2: {
    color: colors.light.text,
  },
  extraSubmit: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.light.blue,
    backgroundColor: colors.light.white,
    borderRadius: 8,
    width: '100%',
    height: 48,
    marginTop: 20,
  },
  img: {
    marginRight: 10,
  },
});
