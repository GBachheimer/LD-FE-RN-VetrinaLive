import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
  hanldeAddProduct: () => void | undefined;
};

const ProductsHeader = ({ hanldeAddProduct }: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Products (24 / 100)</Text>
        <Text style={styles.text}>Featured Products (7 / 10)</Text>
        <View style={styles.toggle}>
          <Switch
            trackColor={{ false: '#767577', true: '#AED6F1' }}
            thumbColor={isEnabled ? '#21B8F9' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={hanldeAddProduct}>
          <MaterialIcons name="add" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    textAlign: 'center',
    padding: 15,
    backgroundColor: '#21B8F9',
    borderRadius: 5,
    marginRight: 15,
  },
  text: {
    padding: 5,
    paddingLeft: 15,
    color: '#546679',
  },
  toggle: {
    width: '30%',
  },
});

export default ProductsHeader;
