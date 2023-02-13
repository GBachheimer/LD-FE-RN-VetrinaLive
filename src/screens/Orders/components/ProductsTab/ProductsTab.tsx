import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './ProductsTab.style';

const ProductsTab = ({ closeDrawer }: any) => {
  return (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>Products</Text>
    </View>
  );
};

export default ProductsTab;
