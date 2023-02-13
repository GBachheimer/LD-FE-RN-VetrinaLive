import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrderInfoTab from '../OrderInfoTab/OrderInfoTab';
import ProductsTab from '../ProductsTab/ProductsTab';
import ShippingTab from '../ShippingTab/ShippingTab';
import DrawerHeader from '../DrawerHeader/DrawerHeader';
import { styles } from './DrawerTabs.style';
import colors from 'src/constants/colors';

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
          tabBarActiveTintColor: colors.light.blue,
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

export default DrawerTabs;
