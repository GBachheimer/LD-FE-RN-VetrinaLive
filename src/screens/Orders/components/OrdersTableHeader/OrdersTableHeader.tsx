import React from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import MenuArrows from 'src/components/MenuArrows';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './OrdersTableHeader.style';

type Props = {
  handleAllCheckbox: () => void;
  toggleCheckBox: boolean | undefined;
};

const OrdersTableHeader = ({ handleAllCheckbox, toggleCheckBox }: Props) => {
  return (
    <View style={styles.row}>
      <View style={styles.box1}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={handleAllCheckbox}
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
