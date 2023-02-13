import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  row: {
    fontSize: 16,
    width: '100%',
    borderBottomWidth: 0.5,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box1: {
    width: '20%',
    height: '100%',
    borderRightWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box2: {
    width: '40%',
    height: '100%',
    borderRightWidth: 0.5,
    justifyContent: 'center',
  },
  box3: {
    width: '30%',
    height: '100%',
    borderRightWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box4: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.light.newText,
    fontSize: 16,
    marginLeft: 15,
  },
  button: {
    height: 40,
    width: '80%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.light.white,
    fontSize: 14,
  },
  column1Text: {
    color: colors.light.newText,
    fontSize: 14,
  },
});
