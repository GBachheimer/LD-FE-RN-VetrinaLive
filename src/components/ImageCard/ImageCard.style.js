import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    height: 150,
    padding: 20,
    zIndex: 1,
    alignItems: 'center',
    width: '90%',
  },
  mainCardView: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: colors.light.white,
    borderRadius: 15,
    shadowColor: colors.light.text,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3,
    flexDirection: 'row',
  },
  title: {
    fontSize: 12,
    color: colors.light.blue,
    padding: 2,
  },
  subtitle: {
    fontSize: 16,
    color: colors.light.newText,
    padding: 2,
  },
  timetoread: {
    fontSize: 12,
    color: colors.light.grey,
    textDecorationLine: 'underline',
    padding: 2,
  },
  body: {
    padding: 10,
  },
});
