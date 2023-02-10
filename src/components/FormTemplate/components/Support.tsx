import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Support = () => {
  return (
    <TouchableOpacity style={styles.support}>
      <Icon name="headphones" size={30} color="#103B66" style={styles.icon} />
      <Text style={styles.supportText}>Support</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  support: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#00C48C',
    marginTop: 10,
    width: 120,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  supportText: {
    color: '#103B66',
    fontWeight: 'bold',
    fontSize: 14,
  },
  supportImg: {
    marginRight: 10,
  },
  icon: {
    marginRight: 8,
  }
});

export default Support;
