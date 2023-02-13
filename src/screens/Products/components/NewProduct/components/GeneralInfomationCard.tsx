import EmptyCard from 'src/components/EmptyCard/EmptyCard';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const GeneralInfomationCard = () => {
  return (
    <EmptyCard>
      <Text style={styles.title}>General information</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Product name</Text>
        <TextInput style={styles.input} placeholder="product name" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <View style={styles.input}>
          <View style={styles.descriptionOptions}>
            <TouchableOpacity>
              <Foundation name="bold" size={32} color="#8592A0" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="italic" size={24} color="#8592A0" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="text-width" size={24} color="#8592A0" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="underline" size={24} color="#8592A0" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="menu" size={24} color="#8592A0" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="link-2" size={24} color="#8592A0" />
            </TouchableOpacity>
          </View>
          <TextInput
            editable
            multiline
            numberOfLines={8}
            maxLength={5000}
            style={styles.descriptionBox}
            placeholder="Decription 0/5000"
          />
        </View>
      </View>
    </EmptyCard>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    width: '100%',
    padding: 20,
    color: '#103B66',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
    padding: 10,
    borderColor: '#0A254052',
  },
  inputContainer: {
    width: '100%',
    padding: 20,
  },
  descriptionOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#0A254052',
    height: 40,
  },
  descriptionBox: {
    padding: 10,
  },
  label: {
    fontSize: 18,
    color: '#546679',
  },
});

export default GeneralInfomationCard;
