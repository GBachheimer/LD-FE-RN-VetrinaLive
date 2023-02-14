import React from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import MenuArrows from 'src/components/MenuArrows';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './OrdersTableHeader.style';
import { sortDataByStatus } from 'src/utils/sortDataByStatus';
import { sortDataByString } from 'src/utils/sortDataByString';
import { sortDataById } from 'src/utils/sortDataById';

type Props = {
  handleAllCheckbox: () => void;
  toggleCheckBox: boolean | undefined;
  data: object[];
  setData: any;
};

const OrdersTableHeader = ({
  handleAllCheckbox,
  toggleCheckBox,
  data,
  setData,
}: Props) => {
  return (
    <View style={styles.row}>
      <View style={styles.box1}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={handleAllCheckbox}
        />
        <TouchableOpacity
          style={styles.touchArea}
          onPress={() => sortDataById(data, setData)}>
          <Text style={styles.header1}>#</Text>
          <MenuArrows />
        </TouchableOpacity>
      </View>
      <View style={styles.box2}>
        <TouchableOpacity
          style={styles.touchArea}
          onPress={() => sortDataByString(data, setData)}>
          <Text style={styles.text}>Name</Text>
          <MenuArrows />
        </TouchableOpacity>
      </View>
      <View style={styles.box3}>
        <TouchableOpacity
          style={styles.touchArea}
          onPress={() => sortDataByStatus(data, setData)}>
          <Text style={styles.text}>State</Text>
          <MenuArrows />
        </TouchableOpacity>
      </View>
      <View style={styles.box4} />
    </View>
  );
};

export default OrdersTableHeader;
