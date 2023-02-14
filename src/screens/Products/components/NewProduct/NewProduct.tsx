import React, { useState } from 'react';
import { View } from 'react-native';
import InfoTab from './components/InfoTab';
import NewProductHeader from './components/NewProductHeader/NewProductHeader';
import VariantsTab from './components/VariantsTab';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { styles } from './NewProduct.style';
import colors from 'src/constants/colors';

type Props = {
  hanldeAddProduct: (id?: number) => void;
  product?: {
    id?: number;
    title?: string;
    price?: string;
    cathegory?: string;
    description?: string;
    image?: string;
  };
};

const Tab = createMaterialTopTabNavigator();

const NewProduct = ({ hanldeAddProduct, product }: Props) => {
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
        <Tab.Screen name="Info">
          {props => <InfoTab {...props} product={product} />}
        </Tab.Screen>
        <Tab.Screen name="Varinats" component={VariantsTab} />
      </Tab.Navigator>
    </View>
  );
};

export default NewProduct;
