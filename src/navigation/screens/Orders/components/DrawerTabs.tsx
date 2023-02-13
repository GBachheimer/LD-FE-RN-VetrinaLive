import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrderInfoTab from './OrderInfoTab';
import ProductsTab from './ProductsTab';
import ShippingTab from './ShippingTab';
import DrawerHeader from './DrawerHeader';

type Props = {
  navigation?: any;
  closeDrawer?: () => void | undefined;
};

const Tab = createMaterialTopTabNavigator();

const DrawerTabs = ({ navigation, closeDrawer }: Props) => {
  return (
    <View style={styles.container}>
      <DrawerHeader closeDrawer={closeDrawer} />
      <Tab.Navigator
        initialRouteName="OrderInfo"
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarLabelStyle: styles.tabBarLabelStyle,
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
    padding: 20,
  },
  tabBarStyle: {
    backgroundColor: '#fff',
    elevation: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  tabBarLabelStyle: {
    color: '#103B66',
    fontSize: 14,
  },
});

export default DrawerTabs;
