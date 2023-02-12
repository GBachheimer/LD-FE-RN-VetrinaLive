import EmptyCard from '../../../components/EmptyCard/EmptyCard';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import OrdersHeader from './components/OrdersHeader';
import OrdersTableRow from './components/OrdersTableRow';
import OrdersTableHeader from './components/OrdersTableHeader';
import { ScrollView } from 'react-native-gesture-handler';

const Orders = () => {
  return (
    <View style={styles.container}>
      <OrdersHeader />
      <EmptyCard style={styles.cardStyle}>
        <OrdersTableHeader />
        <ScrollView style={styles.container}>
          <OrdersTableRow orderNumber={2444} name="test" state="Shipped" />
          <OrdersTableRow orderNumber={24} name="test" state="Cancelled" />
          <OrdersTableRow orderNumber={243} name="test" state="New" />
          <OrdersTableRow orderNumber={24} name="test" state="In progress" />
          <OrdersTableRow orderNumber={2} name="test" state="Return made" />
          <OrdersTableRow orderNumber={2444} name="test" state="Shipped" />
          <OrdersTableRow orderNumber={24} name="test" state="Cancelled" />
          <OrdersTableRow orderNumber={243} name="test" state="New" />
          <OrdersTableRow orderNumber={24} name="test" state="In progress" />
          <OrdersTableRow orderNumber={2} name="test" state="Return made" />
          <OrdersTableRow orderNumber={2444} name="test" state="Shipped" />
          <OrdersTableRow orderNumber={24} name="test" state="Cancelled" />
          <OrdersTableRow orderNumber={243} name="test" state="New" />
          <OrdersTableRow orderNumber={24} name="test" state="In progress" />
          <OrdersTableRow orderNumber={2} name="test" state="Return made" />
        </ScrollView>
      </EmptyCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardStyle: {
    borderRadius: 0,
  },
});

export default Orders;
