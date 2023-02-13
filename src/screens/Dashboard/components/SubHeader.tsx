import React from 'react';
import { Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import { Linking } from 'react-native';

const SubHeader = () => {
  return (
    <LinearGradient
      colors={['#21B8F9', '#AED6F1']}
      style={styles.linearGradient}>
      <Text style={styles.welcome}>Welcome Mario!</Text>
      <Text onPress={() => Linking.openURL('http://google.com')} style={styles.link}>
        <Text style={styles.storeLink}>app.vetrinalive.com/mario-store</Text>
        <Icon name="external-link" size={24} color="#fff" />
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
  },
  storeLink: {
    fontSize: 20,
    color: 'white',
  },
  linearGradient: {
    paddingLeft: 20,
    paddingRight: 15,
    width: '100%',
    alignItems: 'flex-start',
    position: 'absolute',
    height: 300,
  },
  link: {
    marginTop: 30,
  },
});

export default SubHeader;
