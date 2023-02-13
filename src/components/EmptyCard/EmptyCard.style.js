import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    zIndex: 1,
    alignItems: 'center',
    width: '100%',
  },
  mainCardView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.light.white,
    borderRadius: 15,
    shadowColor: colors.light.text,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3,
  },
});
