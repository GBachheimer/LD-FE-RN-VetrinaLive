import EmptyCard from 'src/components/EmptyCard/EmptyCard';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './DetailsCard.style';
import colors from 'src/constants/colors';

type Props = {
  product?: {
    id?: number;
    title?: string;
    price?: string;
    category?: string;
    description?: string;
    image?: string;
  };
};

const DetailsCard = ({ product }: Props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <EmptyCard>
      <Text style={styles.title}>Details</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Category</Text>
        <TextInput
          style={styles.input}
          placeholder="Select category"
          value={product ? product.category : 'Select category'}
        />
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
            color={colors.light.newText}
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
            color={colors.light.newText}
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

export default DetailsCard;
