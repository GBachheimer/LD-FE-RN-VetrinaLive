import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrderInfoTab from './OrderInfoTab';
import ProductsTab from './ProductsTab';
import ShippingTab from './ShippingTab';

type Props = {
  navigation?: any;
  closeDrawer?: () => void | undefined;
};

const Tab = createMaterialTopTabNavigator();

const DrawerTabs = ({ navigation, closeDrawer }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      drawerItemStyle: { display: 'none' },
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      {/* <NewProductHeader hanldeAddProduct={hanldeAddProduct} /> */}
      <Tab.Navigator
        initialRouteName="OrderInfo"
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: styles.tabBarStyle,
        }}>
        <Tab.Screen name="OrderInfo">
          {props => <OrderInfoTab {...props} closeDrawer={closeDrawer} />}
        </Tab.Screen>
        <Tab.Screen name="Products">
          {props => <ProductsTab {...props} closeDrawer={closeDrawer} />}
        </Tab.Screen>
        <Tab.Screen name="Shipping">
          {props => <ShippingTab {...props} closeDrawer={closeDrawer} />}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarStyle: {
    backgroundColor: '#F2F2F2',
    elevation: 0,
  },
});

export default DrawerTabs;
