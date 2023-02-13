import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  welcome: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.light.white,
    marginTop: 50,
  },
  storeLink: {
    fontSize: 20,
    color: colors.light.white,
  },
  linearGradient: {
    paddingLeft: 20,
    paddingRight: 15,
    width: '100%',
    alignItems: 'flex-start',
    position: 'absolute',
    height: 300,
  },
  link: {
    marginTop: 30,
  },
});
