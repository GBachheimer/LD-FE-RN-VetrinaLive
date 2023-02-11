import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import Card from '../../../../components/Card/Card';
import Feather from 'react-native-vector-icons/Feather';

const SupportCard = () => {
  return (
    <Card
      icon={<Feather name="headphones" size={28} color="#103B66" />}
      title="Customer support">
      <View style={styles.helpPerson}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682_1280.jpg',
          }}
          style={styles.avatar}
        />
        <Text>Simone is here to help you</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Contact us</Text>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  helpPerson: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#21B8F9',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 1.62,
    elevation: 2,
    height: 50,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginRight: 10,
  },
});

export default SupportCard;
