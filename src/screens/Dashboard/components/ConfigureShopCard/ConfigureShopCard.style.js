import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  percentageConatiner: {
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  percentage: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.light.red,
  },
  additionalText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    color: colors.light.strongGrey,
    padding: 10,
  },
  cardStyle: {
    marginTop: 200,
  },
});
