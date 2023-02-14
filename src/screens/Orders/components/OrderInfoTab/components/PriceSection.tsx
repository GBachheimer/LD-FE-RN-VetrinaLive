import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../OrderInfoTab.style';
import { allOrdersStatus } from 'src/utils/getRandomStatus';
import { selectColor } from 'src/utils/selectColor';

const PriceSection = ({ user }: any) => {
  return (
    <View style={styles.footer}>
      <View style={{ ...styles.rowSection, ...styles.space }}>
        <Text style={styles.sectionTitle}>Subtotal</Text>
        <Text style={styles.sectionTitle}>€ 47,00</Text>
      </View>
      <View style={{ ...styles.rowSection, ...styles.space }}>
        <Text style={styles.sectionTitle}>Courier Shipping</Text>
        <View style={styles.rowSection}>
          <Text style={styles.sectionTitle}>€ 2,00</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#103B66" />
        </View>
      </View>
      <View style={{ ...styles.rowSection, ...styles.space }}>
        <Text style={{ ...styles.total, ...styles.sectionTitle }}>Total</Text>
        <Text style={{ ...styles.total, ...styles.sectionTitle }}>€ 49,00</Text>
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
  );
};

export default PriceSection;
