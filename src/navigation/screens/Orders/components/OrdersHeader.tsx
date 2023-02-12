import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

const OrdersHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orders: 24</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ship order</Text>
        <Feather name="external-link" size={24} color="#B6BEC6" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 110,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: 120,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E7E9EC',
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
  },
  buttonText: {
    color: '#B6BEC6',
    fontSize: 16,
  },
});

export default OrdersHeader;
