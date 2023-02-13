import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ProductsHeader from './components/ProductsHeader';
import ProductsTable from './components/ProductsTable';
import NewProduct from './components/NewProduct/NewProduct';

const Product = ({ navigation }: any) => {
  const [addProduct, setAddProduct] = useState(false);
  const hanldeAddProduct = () => {
    setAddProduct(!addProduct);
  };

  if (addProduct) {
    return <NewProduct hanldeAddProduct={hanldeAddProduct} />;
  }

  return (
    <View style={styles.container}>
      <ProductsHeader hanldeAddProduct={hanldeAddProduct} />
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
