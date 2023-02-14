import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HeaderRight from './components/HeaderRight';
import { styles } from './DrawerNavigator.styles';
import Dashboard from 'src/screens/Dashboard/Dashboard';
import Product from 'src/screens/Products/Product';
import Subscription from 'src/screens/Subscription/Subscription';
import Payments from 'src/screens/Payments/Payments';
import DrawerContent from './components/DrawerContent';
import AndroidDrawer from 'src/screens/Orders/AndroidDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <DrawerContent passProps={props} />}
      screenOptions={() => ({
        headerTitleStyle: { ...styles.title },
      })}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Group
        screenOptions={() => ({
          headerRight: () => <HeaderRight />,
        })}>
        <Drawer.Screen name="Product" component={Product} />
        <Drawer.Screen name="Orders" component={AndroidDrawer} />
      </Drawer.Group>
      <Drawer.Screen name="Payments" component={Payments} />
      <Drawer.Screen name="Subscription" component={Subscription} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
