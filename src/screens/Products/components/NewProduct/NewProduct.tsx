import React from 'react';
import { View } from 'react-native';
import InfoTab from './components/InfoTab';
import NewProductHeader from './components/NewProductHeader/NewProductHeader';
import VariantsTab from './components/VariantsTab';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { styles } from './NewProduct.style';
import colors from 'src/constants/colors';

const Tab = createMaterialTopTabNavigator();

const NewProduct = ({ hanldeAddProduct }: any) => {
  return (
    <View style={styles.container}>
      <NewProductHeader hanldeAddProduct={hanldeAddProduct} />
      <Tab.Navigator
        initialRouteName="Info"
        screenOptions={{
          tabBarActiveTintColor: colors.light.blue,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: styles.tabBarStyle,
        }}>
        <Tab.Screen name="Info" component={InfoTab} />
        <Tab.Screen name="Varinats" component={VariantsTab} />
      </Tab.Navigator>
    </View>
  );
};

export default NewProduct;
