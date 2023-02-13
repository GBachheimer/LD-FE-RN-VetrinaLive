import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  tabBarStyle: {
    backgroundColor: colors.light.white,
    elevation: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  tabBarLabelStyle: {
    color: colors.light.newText,
    fontSize: 14,
  },
});
