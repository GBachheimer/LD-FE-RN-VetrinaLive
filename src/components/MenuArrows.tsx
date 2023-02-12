import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MenuArrows = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="keyboard-arrow-up" size={18} color="#103B66" />
      <MaterialIcons name="keyboard-arrow-down" size={18} color="#103B66" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default MenuArrows;
