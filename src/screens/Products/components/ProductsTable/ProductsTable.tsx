import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TableRow from '../TableRow/TableRow';
import TableHead from '../TableHead/TableHead';
import TableFooter from '../TableFooter/TableFooter';
import EmptyCard from 'src/components/EmptyCard/EmptyCard';
import { styles } from './ProductsTable.style';
import { getProducts } from 'src/api/getProducts';

type ProductItem = {
  id: number | undefined;
  title: string | undefined;
  price: string | undefined;
  category: string | undefined;
  description: string | undefined;
  image: string | undefined;
};

const ProductsTable = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts(setData, setLoading);
  }, []);

  return (
    <EmptyCard>
      <TableHead />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={isLoading ? styles.content : null}>
        {isLoading ? (
          <ActivityIndicator size={100} />
        ) : (
          <>
            {data.map((productItem: ProductItem, index) => {
              if (!productItem.image) {
                return;
              }
              return (
                <View style={styles.row} key={productItem.image}>
                  <TableRow
                    key={productItem.id}
                    image={productItem.image}
                    name={productItem.title}
                    price={productItem.price}
                  />
                </View>
              );
            })}
          </>
        )}
      </ScrollView>
      <TableFooter />
    </EmptyCard>
  );
};

export default ProductsTable;
