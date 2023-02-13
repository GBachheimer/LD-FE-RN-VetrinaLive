import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './ProductsHeader.style';
import colors from 'src/constants/colors';

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
            trackColor={{
              false: colors.light.grey,
              true: colors.light.lightBlue,
            }}
            thumbColor={isEnabled ? colors.light.blue : colors.light.strongGrey}
            ios_backgroundColor={colors.light.text}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={hanldeAddProduct}>
          <MaterialIcons name="add" size={30} color={colors.light.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductsHeader;
