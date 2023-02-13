import React from 'react';
import { StyleSheet, View } from 'react-native';
import InfoTab from './components/InfoTab';
import NewProductHeader from './components/NewProductHeader';
import VariantsTab from './components/VariantsTab';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const NewProduct = ({ hanldeAddProduct }: any) => {
  return (
    <View style={styles.container}>
      <NewProductHeader hanldeAddProduct={hanldeAddProduct} />
      <Tab.Navigator
        initialRouteName="Info"
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: styles.tabBarStyle,
        }}>
        <Tab.Screen name="Info" component={InfoTab} />
        <Tab.Screen name="Varinats" component={VariantsTab} />
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
    marginLeft: 15,
    marginRight: 100,
    elevation: 0,
  },
});

export default NewProduct;
