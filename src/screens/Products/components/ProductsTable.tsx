import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TableRow from './TableRow';
import TableHead from './TableHead';
import TableFooter from './TableFooter';
import EmptyCard from 'src/components/EmptyCard/EmptyCard';

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

const styles = StyleSheet.create({
  row: {
    fontSize: 16,
    width: '100%',
    borderBottomWidth: 0.5,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
});

export default ProductsTable;
