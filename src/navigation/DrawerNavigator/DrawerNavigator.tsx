import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HeaderRight from './components/HeaderRight';
import { styles } from './DrawerNavigator.styles';
import Dashboard from '../screens/Dashboard/Dashboard';
import Product from '../screens/Products/Product';
import Plan from '../screens/Plan';
import Payments from '../screens/Payments/Payments';
import Admin from '../screens/Admin';
import DrawerContent from './components/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
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
        <Drawer.Screen name="Admin" component={Admin} />
      </Drawer.Group>
      <Drawer.Screen name="Payments" component={Payments} />
      <Drawer.Screen name="Plan" component={Plan} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
