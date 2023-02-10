import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SubHeader = () => {
  return (
    <View style={styles.subHeader}>
      <Text style={styles.welcome}>Welcome Mario!</Text>
      <Text>app.vetrinaLive.com/store</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    width: '100%',
    height: '50%',
    alignItems: 'flex-start',
  },
  background: {
    width: '100%',
    height: '50%',
    marginTop: 0,
    zIndex: 0,
  },
  welcome: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  storeLink: {
    fontSize: 20,
    color: 'white',
  },
});

export default SubHeader;
