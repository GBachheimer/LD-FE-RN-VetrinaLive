import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { styles } from './DrawerNavigator.styles';
import Dashboard from './screens/Dashboard';
import Product from './screens/Product';
import Plan from './screens/Plan';
import Payments from './screens/Payments';
import Admin from './screens/Admin';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={()=> alert('signout')} />
          </DrawerContentScrollView>
        );
      }}
      screenOptions={({ navigation }) => ({
        headerTitleStyle: { ...styles.title },
      })}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Product" component={Product} />
      <Drawer.Screen name="Plan" component={Plan} />
      <Drawer.Screen name="Payments" component={Payments} />
      <Drawer.Screen name="Admin" component={Admin} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
