import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    color: colors.light.newText,
    width: '100%',
    padding: 15,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 15,
  },
  optionName: {
    fontSize: 24,
    color: colors.light.newText,
    width: '100%',
    padding: 10,
    paddingLeft: 25,
  },
  button: {
    padding: 10,
    height: 50,
    backgroundColor: colors.light.lightGreen,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: colors.light.wak,
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
  },
});
