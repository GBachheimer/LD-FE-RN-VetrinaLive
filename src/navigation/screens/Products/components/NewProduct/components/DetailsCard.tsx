import EmptyCard from '../../../../../../components/EmptyCard/EmptyCard';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-gesture-handler';

const DetailsCard = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <EmptyCard>
      <Text style={styles.title}>Details</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Category</Text>
        <TextInput style={styles.input} placeholder="Select category" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Product code / SKU </Text>
        <TextInput
          style={styles.input}
          placeholder="discount"
          editable={false}
          selectTextOnFocus={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight</Text>
        <View>
          <MaterialCommunityIcons
            name="weight-gram"
            size={24}
            color="#103B66"
            style={styles.icon}
          />
          <TextInput style={styles.inputWithIcon} placeholder="0 g" />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Availability</Text>
        <View>
          <MaterialCommunityIcons
            name="cube-outline"
            size={24}
            color="#103B66"
            style={styles.icon}
          />
          <TextInput style={styles.inputWithIcon} placeholder="0" />
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
        <Text style={styles.checkBoxLabel}>This is a featured product</Text>
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
    borderColor: '#0A254052',
    flex: 1,
    paddingLeft: 10,
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
    padding: 15,
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
    paddingLeft: 10,
    paddingTop: 12.5,
    position: 'absolute',
  },
});

export default DetailsCard;
