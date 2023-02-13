import React from 'react';
import { View, StyleSheet } from 'react-native';
import TableRow from './TableRow';

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

const styles = StyleSheet.create({
  row: {
    fontSize: 16,
    width: '100%',
    borderBottomWidth: 0.5,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tableHeaderText: {
    fontSize: 20,
    color: '#233B53',
    marginLeft: 15,
  },
});

export default TableHead;
