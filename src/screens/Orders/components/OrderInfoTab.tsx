import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getCurrentDate } from 'src/utils/getCurrentTime';

const OrderInfoTab = ({ closeDrawer }: any) => {
  return (
    <ScrollView style={[styles.container]}>
      <View style={styles.section}>
        <Text style={styles.date}>{getCurrentDate()}</Text>
        <Text style={styles.sectionTitle}>Client</Text>
        <Text style={styles.sectionText}>name</Text>
        <Text style={styles.link}>Email</Text>
        <View style={styles.rowSection}>
          <Text style={styles.sectionText}>Phone: </Text>
          <Text style={styles.link}>+4023223131</Text>
        </View>
        <Text style={styles.sectionText}>Tax Code: RSSMAR22T33M123K</Text>
        <View style={styles.rowSection}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://seeklogo.com/images/W/whatsapp-logo-33F6A82887-seeklogo.com.png',
            }}
          />
          <Text style={styles.whatsapp}>Contact on Whatsapp</Text>
        </View>
        <View style={styles.rowSection}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2111/2111646.png',
            }}
          />
          <Text style={styles.link}>Contact on Telegram</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.borders}>
          <Text style={styles.sectionTitle}>Shipping address</Text>
          <Text style={styles.address}>
            Via Roma, 59, Torre del Greco, NA, 80059
          </Text>
        </View>
        <View style={styles.shippingSubSection}>
          <Text style={styles.secondaryText}>Shipping info</Text>
          <Text style={styles.sectionText}>Courier Name: Fedex</Text>
          <Text style={styles.sectionText}>
            Order number/Link: FR12342123 2314
          </Text>
          <View style={styles.rowSection}>
            <Feather name="info" size={24} color="#103B66" />
            <Text style={{ ...styles.sectionText, ...styles.margins }}>
              Courier shipping
            </Text>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color="#103B66"
            />
          </View>
          <Text style={styles.note}>
            If you change the delivery method and costs, remember to notify the
            customer.
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{ ...styles.rowSection, ...styles.space }}>
          <Text style={styles.sectionTitle}>Subtotal</Text>
          <Text style={styles.sectionTitle}>€ 47,00</Text>
        </View>
        <View style={{ ...styles.rowSection, ...styles.space }}>
          <Text style={styles.sectionTitle}>Courier Shipping</Text>
          <View style={styles.rowSection}>
            <Text style={styles.sectionTitle}>€ 2,00</Text>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color="#103B66"
            />
          </View>
        </View>
        <View style={{ ...styles.rowSection, ...styles.space }}>
          <Text style={{ ...styles.total, ...styles.sectionTitle }}>Total</Text>
          <Text style={{ ...styles.total, ...styles.sectionTitle }}>
            € 49,00
          </Text>
        </View>
        <TouchableOpacity style={styles.shippingStatus}>
          <Text style={styles.shippingStatusText}>Shipped</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#546679',
    marginTop: 10,
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 14,
    color: '#103B66',
    marginTop: 10,
    marginBottom: 10,
  },
  link: {
    fontSize: 14,
    color: '#21B8F9',
    marginTop: 10,
    marginBottom: 10,
  },
  whatsapp: {
    fontSize: 14,
    color: '#00C48C',
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
    color: '#546679',
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
    color: '#103B66',
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
    backgroundColor: '#6979F8',
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shippingStatusText: {
    color: '#fff',
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

export default OrderInfoTab;
