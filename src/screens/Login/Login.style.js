import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {},
  body: {
    flex: 9,
    width: '100%',
    paddingTop: 10,
    alignItems: 'center',
    paddingLeft: '10%',
    paddingRight: '10%',
    backgroundColor: colors.light.white,
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.light.grey,
    borderRadius: 8,
    height: 48,
    padding: 10,
    marginTop: 10,
  },
});
