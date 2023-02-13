import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardStyle: {
    borderRadius: 0,
  },
  navigationContainer: {
    backgroundColor: colors.light.purple,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});
