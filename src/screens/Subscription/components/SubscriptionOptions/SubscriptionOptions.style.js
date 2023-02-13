import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  card: {
    height: 140,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    height: '100%',
    padding: 15,
  },
  section: {
    width: '50%',
    height: '100%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    color: colors.light.newText,
  },
  benefit: {
    fontSize: 14,
    color: colors.light.wak,
  },
  bottomLeft: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  sectionRight: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 26,
    color: colors.light.blue,
    marginLeft: 3,
    marginRight: 3,
  },
  text: {
    fontSize: 18,
    color: colors.light.newText,
  },
  button: {
    width: 120,
    height: 45,
    borderRadius: 5,
    backgroundColor: colors.light.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.light.white,
  },
});
