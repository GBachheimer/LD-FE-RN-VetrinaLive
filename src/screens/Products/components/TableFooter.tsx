import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TableFooter = () => {
  return (
    <View style={{ ...styles.row, ...styles.tableFooter }}>
      <View style={styles.footerPageSelection}>
        <Text>P 25</Text>
        <MaterialIcons name="arrow-drop-down" size={24} color="#6C7C8C" />
      </View>
      <Text>1-25 of 25</Text>
      <View style={styles.footerPageSelection}>
        <TouchableOpacity>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="#6C7C8C" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color="#6C7C8C"
          />
        </TouchableOpacity>
      </View>
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
  tableFooter: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderBottomWidth: 0,
  },
  footerPageSelection: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default TableFooter;
