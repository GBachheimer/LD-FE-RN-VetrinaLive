import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './OrdersHeader.style';
import colors from 'src/constants/colors';

const OrdersHeader = ({ total }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orders: {total}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ship order</Text>
        <Feather
          name="external-link"
          size={24}
          color={colors.light.strongGrey}
        />
      </TouchableOpacity>
    </View>
  );
};

export default OrdersHeader;
