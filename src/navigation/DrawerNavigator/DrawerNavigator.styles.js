import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  menuIcon: {
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
    color: colors.light.newText,
  },
  headerRight: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 20,
  },
});
