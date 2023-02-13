import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.white,
  },
  cardStyle: {
    borderRadius: 0,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  date: {
    fontSize: 14,
    marginTop: 10,
  },
  section: {
    width: '100%',
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    color: colors.light.strongGrey,
    marginTop: 10,
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 14,
    color: colors.light.newText,
    marginTop: 10,
    marginBottom: 10,
  },
  link: {
    fontSize: 14,
    color: colors.light.blue,
    marginTop: 10,
    marginBottom: 10,
  },
  whatsapp: {
    fontSize: 14,
    color: colors.light.green,
    marginTop: 10,
    marginBottom: 10,
  },
  rowSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shippingSubSection: {
    marginTop: 10,
  },
  secondaryText: {
    fontSize: 16,
    color: colors.light.strongGrey,
    marginBottom: 10,
    marginTop: 10,
  },
  borders: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  address: {
    marginBottom: 10,
    fontSize: 14,
    color: colors.light.newText,
  },
  margins: {
    marginLeft: 10,
    marginRight: 10,
  },
  note: {
    fontSize: 10,
  },
  space: {
    justifyContent: 'space-between',
  },
  footer: {
    padding: 10,
    marginTop: 30,
  },
  shippingStatus: {
    width: '100%',
    height: 70,
    backgroundColor: colors.light.weirdPurple,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shippingStatusText: {
    color: colors.light.white,
    fontSize: 18,
  },
  total: {
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
});
