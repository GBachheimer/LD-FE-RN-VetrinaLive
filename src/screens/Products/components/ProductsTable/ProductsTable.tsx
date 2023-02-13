import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TableRow from '../TableRow/TableRow';
import TableHead from '../TableHead/TableHead';
import TableFooter from '../TableFooter/TableFooter';
import EmptyCard from 'src/components/EmptyCard/EmptyCard';
import { styles } from './ProductsTable.style';

const ProductsTable = () => {
  return (
    <EmptyCard>
      <TableHead />
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          <TableRow
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Chess_Board.svg/2048px-Chess_Board.svg.png"
            name="T shirt"
            price={30}
          />
        </View>
      </ScrollView>
      <TableFooter />
    </EmptyCard>
  );
};

export default ProductsTable;
