import React from 'react';
import { View } from 'react-native';
import TableRow from '../TableRow/TableRow';
import { styles } from './TableHead.style';

const TableHead = () => {
  return (
    <View style={styles.row}>
      <TableRow
        name="Product name"
        price="Price"
        style={styles.tableHeaderText}
      />
    </View>
  );
};

export default TableHead;
