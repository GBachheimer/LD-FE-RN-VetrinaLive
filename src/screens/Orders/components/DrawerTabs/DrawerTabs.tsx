import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrderInfoTab from '../OrderInfoTab/OrderInfoTab';
import ProductsTab from '../ProductsTab/ProductsTab';
import ShippingTab from '../ShippingTab/ShippingTab';
import DrawerHeader from '../DrawerHeader/DrawerHeader';
import { styles } from './DrawerTabs.style';
import colors from 'src/constants/colors';
import { User } from 'src/screens/Orders/AndroidDrawer';

type Props = {
  navigation?: any;
  closeDrawer?: () => void | undefined;
  user: User;
};

const Tab = createMaterialTopTabNavigator();

const DrawerTabs = ({ navigation, closeDrawer, user }: Props) => {
  return (
    <View style={styles.container}>
      <DrawerHeader closeDrawer={closeDrawer} orderNumber={user.id} />
      <Tab.Navigator
        initialRouteName="OrderInfo"
        screenOptions={{
          tabBarActiveTintColor: colors.light.blue,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarStyle: styles.tabBarStyle,
        }}>
        <Tab.Screen name="Order Info">
          {props => (
            <OrderInfoTab {...props} closeDrawer={closeDrawer} user={user} />
          )}
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
