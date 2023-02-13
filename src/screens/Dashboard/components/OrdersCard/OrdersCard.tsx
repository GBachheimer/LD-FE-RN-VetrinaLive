import React from 'react';
import { Text, Linking, View } from 'react-native';
import Card from 'src/components/Card/Card';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from './OrdersCard.style';
import colors from 'src/constants/colors';

const OrdersCard = () => {
  return (
    <Card
      icon={<Feather name="menu" size={28} color={colors.light.newText} />}
      title="Orders"
      option={
        <View style={styles.periodOption}>
          <Text>This month</Text>
          <MaterialIcons
            name="arrow-drop-down"
            size={24}
            color={colors.light.text}
          />
        </View>
      }
      linkText="10 free tips to increase your sales"
      linkAction={() => Linking.openURL('http://google.com')}
      linkIcon={
        <AntDesign name="arrowright" size={24} color={colors.light.blue} />
      }>
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

export default OrdersCard;
