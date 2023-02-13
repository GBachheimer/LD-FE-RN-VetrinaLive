import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import MenuArrows from 'src/components/MenuArrows';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './OrdersTableHeader.style';

const OrdersTableHeader = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.row}>
      <View style={styles.box1}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(
            newValue: boolean | ((prevState: boolean) => boolean),
          ) => setToggleCheckBox(newValue)}
        />
        <TouchableOpacity style={styles.touchArea}>
          <Text style={styles.header1}>#</Text>
          <MenuArrows />
        </TouchableOpacity>
      </View>
      <View style={styles.box2}>
        <TouchableOpacity style={styles.touchArea}>
          <Text style={styles.text}>Name</Text>
          <MenuArrows />
        </TouchableOpacity>
      </View>
      <View style={styles.box3}>
        <TouchableOpacity style={styles.touchArea}>
          <Text style={styles.text}>State</Text>
          <MenuArrows />
        </TouchableOpacity>
      </View>
      <View style={styles.box4} />
    </View>
  );
};

export default OrdersTableHeader;
