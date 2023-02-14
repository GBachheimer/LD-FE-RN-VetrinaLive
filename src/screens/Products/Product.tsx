import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import ProductsHeader from './components/ProductsHeader/ProductsHeader';
import ProductsTable from './components/ProductsTable/ProductsTable';
import NewProduct from './components/NewProduct/NewProduct';
import { getProducts } from 'src/api/getProducts';

const Product = ({ navigation }: any) => {
  const [addProduct, setAddProduct] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<[]>([]);
  const [product, setProduct] = useState<{
    id?: number;
    title?: string;
    price?: string;
    cathegory?: string;
    description?: string;
    image?: string;
  }>({});

  const hanldeAddProduct = (id?: number): void => {
    if (id) {
      setProduct(data[id - 1]);
    } else {
      setProduct({});
    }
    setAddProduct(!addProduct);
  };

  useEffect(() => {
    getProducts(setData, setLoading, setProduct);
  }, []);

  if (addProduct) {
    return (
      <>
        {isLoading ? (
          <ActivityIndicator size={100} />
        ) : (
          <NewProduct hanldeAddProduct={hanldeAddProduct} product={product} />
        )}
      </>
    );
  }

  return (
    <View style={styles.container}>
      <ProductsHeader hanldeAddProduct={hanldeAddProduct} />
      {isLoading ? (
        <ActivityIndicator size={100} />
      ) : (
        <ProductsTable
          hanldeAddProduct={hanldeAddProduct}
          data={data}
          isLoading={isLoading}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Product;
