import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './ShippingTab.style';

const ShippingTab = ({ closeDrawer }: any) => {
  return (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>Shipping</Text>
    </View>
  );
};

export default ShippingTab;
