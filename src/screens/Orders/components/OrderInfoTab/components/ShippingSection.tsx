import React from 'react';
import { View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../OrderInfoTab.style';

const ShippingSection = ({ user }: any) => {
  return (
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
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#103B66" />
        </View>
        <Text style={styles.note}>
          If you change the delivery method and costs, remember to notify the
          customer.
        </Text>
      </View>
    </View>
  );
};

export default ShippingSection;
