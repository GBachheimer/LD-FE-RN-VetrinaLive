import EmptyCard from 'src/components/EmptyCard/EmptyCard';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Foundation from 'react-native-vector-icons/Foundation';
import { TextInput } from 'react-native-gesture-handler';

const PriceCard = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <EmptyCard>
      <Text style={styles.title}>Price</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Original price</Text>
        <View>
          <Foundation
            name="euro"
            size={24}
            color="#103B66"
            style={styles.icon}
          />
          <TextInput style={styles.inputWithIcon} placeholder="0" />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Dicounted price</Text>
        <View>
          <Foundation
            name="euro"
            size={24}
            color="#103B66"
            style={styles.icon}
          />
          <TextInput
            style={styles.inputWithIcon}
            placeholder="discount"
            editable={false}
            selectTextOnFocus={false}
          />
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkBoxScale}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(
              newValue: boolean | ((prevState: boolean) => boolean),
            ) => setToggleCheckBox(newValue)}
          />
        </View>
        <Text style={styles.checkBoxLabel}>Activate discount price</Text>
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
    padding: 10,
    borderColor: '#0A254052',
    flex: 1,
  },
  inputWithIcon: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#0A254052',
    padding: 10,
    paddingLeft: 40,
  },
  inputContainer: {
    width: '100%',
    padding: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  checkBoxScale: {
    transform: [{ scale: 1.5 }],
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    fontSize: 18,
    color: '#546679',
    marginBottom: 10,
  },
  checkBoxLabel: {
    fontSize: 18,
    color: '#103B66',
    marginLeft: 15,
  },
  icon: {
    paddingLeft: 15,
    paddingTop: 13,
    position: 'absolute',
  },
});

export default PriceCard;
