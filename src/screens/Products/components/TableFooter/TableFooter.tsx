import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './TableFooter.style';
import colors from 'src/constants/colors';

const TableFooter = () => {
  return (
    <View style={{ ...styles.row, ...styles.tableFooter }}>
      <View style={styles.footerPageSelection}>
        <Text>P 25</Text>
        <MaterialIcons
          name="arrow-drop-down"
          size={24}
          color={colors.light.strongGrey}
        />
      </View>
      <Text>1-25 of 25</Text>
      <View style={styles.footerPageSelection}>
        <TouchableOpacity>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={colors.light.strongGrey}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color={colors.light.strongGrey}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TableFooter;
