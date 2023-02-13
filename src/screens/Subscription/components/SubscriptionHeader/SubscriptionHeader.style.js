import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  period: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  promo: {
    borderRadius: 10,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  promoText: {
    color: colors.light.white,
  },
  periodText: {
    fontSize: 18,
  },
  switch: {
    marginLeft: 10,
    marginRight: 10,
  },
});
