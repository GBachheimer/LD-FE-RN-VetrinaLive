import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ShippingTab = ({ closeDrawer }: any) => {
  return (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>Shipping</Text>
      <Button title="Close drawer" onPress={closeDrawer} />
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

export default ShippingTab;
