import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Divider.style';

const Divider = () => {
  return (
    <View style={styles.separator}>
      <View style={[styles.divider, styles.dividerMarginR]} />
      <Text>OR</Text>
      <View style={[styles.divider, styles.dividerMarginL]} />
    </View>
  );
};

export default Divider;
