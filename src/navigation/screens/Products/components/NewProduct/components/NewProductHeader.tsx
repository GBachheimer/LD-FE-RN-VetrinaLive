import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NewProductHeader = ({ hanldeAddProduct }: any) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={hanldeAddProduct}>
        <View style={styles.backButtonView}>
          <MaterialIcons name="arrow-back-ios" size={20} color="#103B66" />
          <Text style={styles.buttonText}>All products</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>New Product</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 150,
    padding: 15,
  },
  backButton: {
    width: 150,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#21B8F9',
  },
  backButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  buttonText: {
    fontSize: 16,
    color: '#103B66',
  },
  title: {
    fontSize: 28,
    color: '#103B66',
    marginTop: 30,
  },
});

export default NewProductHeader;
