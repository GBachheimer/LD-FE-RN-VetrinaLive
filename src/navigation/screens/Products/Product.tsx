import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductsHeader from './components/ProductsHeader';
import ProductsTable from './components/ProductsTable';

const Product = () => {
  return (
    <View style={styles.container}>
      <ProductsHeader />
      <ProductsTable />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Product;
