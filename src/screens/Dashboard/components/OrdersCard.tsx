import React from 'react';
import { Text, StyleSheet, Linking, View } from 'react-native';
import Card from 'src/components/Card/Card';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const OrdersCard = () => {
  return (
    <Card
      icon={<Feather name="menu" size={28} color="#103B66" />}
      title="Orders"
      option={
        <View style={styles.periodOption}>
          <Text>This month</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="#000" />
        </View>
      }
      linkText="10 free tips to increase your sales"
      linkAction={() => Linking.openURL('http://google.com')}
      linkIcon={<AntDesign name="arrowright" size={24} color="#21B8F9" />}>
      <View style={styles.ordersRow}>
        <Text style={styles.text}>Orders received:</Text>
        <Text style={styles.numbers}>0</Text>
      </View>
      <View style={styles.ordersRow}>
        <Text style={styles.text}>Earnings:</Text>
        <Text style={styles.numbers}>$ 0.00</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  visitors: {
    fontSize: 50,
    color: '#103B66',
    fontWeight: 'bold',
  },
  periodOption: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  ordersRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  text: {
    fontSize: 16,
    color: '#7D8A99',
  },
  numbers: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#103B66',
  },
});

export default OrdersCard;
