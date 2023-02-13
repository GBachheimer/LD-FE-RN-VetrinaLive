import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getCurrentDate } from 'src/utils/getCurrentTime';
import { styles } from './OrderInfoTab.style';
import { allOrdersStatus } from 'src/utils/getRandomStatus';
import { selectColor } from 'src/utils/selectColor';

const OrderInfoTab = ({ closeDrawer, user }: any) => {
  return (
    <ScrollView style={[styles.container]}>
      <View style={styles.section}>
        <Text style={styles.date}>{getCurrentDate()}</Text>
        <Text style={styles.sectionTitle}>Client</Text>
        <Text style={styles.sectionText}>
          {user ? user.firstName + ' ' + user.lastName : 'Name'}
        </Text>
        <Text style={styles.link}>{user ? user.email : 'Email'}</Text>
        <View style={styles.rowSection}>
          <Text style={styles.sectionText}>Phone: </Text>
          <Text style={styles.link}>{user ? user.phone : 'Number'}</Text>
        </View>
        <Text style={styles.sectionText}>Tax Code: {user.ssn}</Text>
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
            {user
              ? user.address.address
              : 'Via Roma, 59, Torre del Greco, NA, 80059'}
          </Text>
        </View>
        <View style={styles.shippingSubSection}>
          <Text style={styles.secondaryText}>Shipping info</Text>
          <Text style={styles.sectionText}>Courier Name: Fedex</Text>
          <Text style={styles.sectionText}>
            Order number/Link: {user.bank.cardNumber}
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
        <TouchableOpacity
          style={{
            ...styles.shippingStatus,
            backgroundColor: selectColor(allOrdersStatus[user.id]),
          }}>
          <Text style={styles.shippingStatusText}>
            {allOrdersStatus[user.id]}
          </Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default OrderInfoTab;
