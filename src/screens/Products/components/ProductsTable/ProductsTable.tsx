import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TableRow from '../TableRow/TableRow';
import TableHead from '../TableHead/TableHead';
import TableFooter from '../TableFooter/TableFooter';
import EmptyCard from 'src/components/EmptyCard/EmptyCard';
import { styles } from './ProductsTable.style';

type ProductItem = {
  id: number;
  title: string | undefined;
  price: string | undefined;
  category: string | undefined;
  description: string | undefined;
  image: string | undefined;
};

type Props = {
  hanldeAddProduct?: (id?: number) => void | undefined;
  data: [];
  isLoading: boolean;
};

const ProductsTable = ({ hanldeAddProduct, data, isLoading }: Props) => {
  return (
    <EmptyCard>
      <TableHead />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={isLoading ? styles.content : null}>
        {data.map((productItem: ProductItem, index: number) => {
          if (!productItem.image) {
            return;
          }
          return (
            <View style={styles.row} key={productItem.image}>
              <TableRow
                key={productItem.id}
                id={productItem.id}
                image={productItem.image}
                name={productItem.title}
                price={productItem.price}
                hanldeAddProduct={hanldeAddProduct}
              />
            </View>
          );
        })}
      </ScrollView>
      <TableFooter />
    </EmptyCard>
  );
};

export default ProductsTable;
