import EmptyCard from '../../../components/EmptyCard/EmptyCard';
import React, { useRef, useState, useLayoutEffect } from 'react';
import { DrawerLayoutAndroid, StyleSheet, View } from 'react-native';
import OrdersHeader from './components/OrdersHeader';
import OrdersTableRow from './components/OrdersTableRow';
import OrdersTableHeader from './components/OrdersTableHeader';
import { ScrollView } from 'react-native-gesture-handler';
import DrawerTabs from './components/DrawerTabs';

const Orders = ({ navigation }: any) => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [header, setHeader] = useState(false);

  const openDrawer = () => {
    drawer.current?.openDrawer();
    setHeader(true);
  };
  const closeDrawer = () => {
    drawer.current?.closeDrawer();
    setHeader(false);
  };

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: header ? false : true });
  }, [header, navigation]);

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={400}
      drawerPosition="right"
      renderNavigationView={() => (
        <DrawerTabs closeDrawer={closeDrawer} navigation={navigation} />
      )}>
      <View style={styles.container}>
        <OrdersHeader />
        <EmptyCard style={styles.cardStyle}>
          <OrdersTableHeader />
          <ScrollView style={styles.container}>
            <OrdersTableRow
              orderNumber={2444}
              name="test"
              state="Shipped"
              openDrawer={openDrawer}
            />
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
    </DrawerLayoutAndroid>
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
