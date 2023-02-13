import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductsTab = ({ closeDrawer }: any) => {
  return (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>Products</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardStyle: {
    borderRadius: 0,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default ProductsTab;
