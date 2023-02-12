import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import MenuArrows from '../../../../components/MenuArrows';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

const styles = StyleSheet.create({
  row: {
    fontSize: 16,
    width: '100%',
    borderBottomWidth: 0.5,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box1: {
    width: '20%',
    height: '100%',
    borderRightWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box2: {
    width: '40%',
    height: '100%',
    borderRightWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box3: {
    width: '30%',
    height: '100%',
    borderRightWidth: 0.5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  box4: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#233B53',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    height: 40,
    width: '80%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header1: {
    color: '#233B53',
    fontSize: 18,
    marginRight: 5,
  },
  touchArea: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default OrdersTableHeader;
