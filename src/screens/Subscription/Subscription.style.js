import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    color: colors.light.newText,
    marginTop: 30,
    width: '100%',
    textAlign: 'center',
  },
});
