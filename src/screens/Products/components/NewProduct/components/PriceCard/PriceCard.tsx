import EmptyCard from 'src/components/EmptyCard/EmptyCard';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Foundation from 'react-native-vector-icons/Foundation';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './PriceCard.style';
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

const PriceCard = ({ product }: Props) => {
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
            color={colors.light.newText}
            style={styles.icon}
          />
          <TextInput
            style={styles.inputWithIcon}
            placeholder="0"
            value={product ? product.price?.toString() : '0'}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Dicounted price</Text>
        <View>
          <Foundation
            name="euro"
            size={24}
            color={colors.light.newText}
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

export default PriceCard;
