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
    flexDirection: 'row',
    alignItems: 'center',
  },
  box3: {
    width: '30%',
    height: '100%',
    borderRightWidth: 0.5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  box4: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.light.darkBlue,
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    height: 40,
    width: '80%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header1: {
    color: colors.light.darkBlue,
    fontSize: 18,
    marginRight: 5,
  },
  touchArea: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
