import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  box1: {
    width: '55%',
    height: '100%',
    borderRightWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box2: {
    width: '30%',
    height: '100%',
    borderRightWidth: 0.5,
    justifyContent: 'center',
  },
  box3: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginLeft: 15,
  },
  text: {
    color: colors.light.newText,
    fontSize: 18,
    marginLeft: 15,
    width: 120,
  },
});
