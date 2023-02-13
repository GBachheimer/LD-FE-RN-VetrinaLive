import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 15,
    zIndex: 1,
  },
  mainCardView: {
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  title1: {
    fontSize: 30,
    color: colors.light.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 28,
    color: colors.light.white,
    textAlign: 'center',
  },
  subTitle: {
    marginTop: 10,
    color: colors.light.newText,
  },
});
