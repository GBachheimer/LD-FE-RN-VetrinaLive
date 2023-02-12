import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CheckBox from '@react-native-community/checkbox';

type Props = {
  orderNumber?: number | string | undefined;
  name?: string | undefined;
  state?: string | undefined;
  style?: object | undefined;
  stateStyle?: object | undefined;
  openDrawer?: (() => void) | undefined;
};

const OrdersTableRow = ({
  orderNumber,
  name,
  state,
  style,
  stateStyle,
  openDrawer,
}: Props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  let color = '';
  switch (state) {
    case 'Shipped':
      color = '#BE52F2';
      break;
    case 'New':
      color = '#21B8F9';
      break;
    case 'Return made':
      color = '#6979F8';
      break;
    case 'Cancelled':
      color = '#F33451';
      break;
    case 'In progress':
      color = '#FFA26B';
      break;
    default:
      color = '#fff';
  }
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
        <Text style={style ? style : styles.column1Text}>{orderNumber}</Text>
      </View>
      <View style={styles.box2}>
        <Text style={style ? style : styles.text}>{name}</Text>
      </View>
      <View style={styles.box3}>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: color }}
          onPress={openDrawer}>
          <Text style={stateStyle ? stateStyle : styles.buttonText}>
            {state}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box4}>
        <TouchableOpacity>
          <SimpleLineIcons name="options" size={20} color="#000" />
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
    justifyContent: 'center',
  },
  box3: {
    width: '30%',
    height: '100%',
    borderRightWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box4: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#103B66',
    fontSize: 16,
    marginLeft: 15,
  },
  button: {
    height: 40,
    width: '80%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  column1Text: {
    color: '#103B66',
    fontSize: 14,
  },
});

export default OrdersTableRow;
