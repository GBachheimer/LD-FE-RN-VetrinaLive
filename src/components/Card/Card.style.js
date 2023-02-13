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
  row: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 10,
  },
  childrenRow: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },
  link: {
    color: colors.light.blue,
    textDecorationLine: 'underline',
    fontSize: 14,
    maxWidth: '80%',
  },
  title: {
    color: colors.light.newText,
    fontSize: 20,
    fontWeight: 'bold',
  },
  linkText: {
    marginRight: 10,
  },
  lastRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    width: '90%',
  },
});
