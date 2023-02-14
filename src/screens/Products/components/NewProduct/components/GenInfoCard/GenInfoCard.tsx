import EmptyCard from 'src/components/EmptyCard/EmptyCard';
import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './GenInfoCard.style';
import DescriptionIcons from './DescriptionIcons';

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

const GenInfoCard = ({ product }: Props) => {
  return (
    <EmptyCard>
      <Text style={styles.title}>General information</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Product name</Text>
        <TextInput
          style={styles.input}
          placeholder="product name"
          value={product ? product.title : ''}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <View style={styles.input}>
          <DescriptionIcons />
          <TextInput
            editable
            multiline
            numberOfLines={8}
            maxLength={5000}
            style={styles.descriptionBox}
            placeholder="Decription 0/5000"
            value={product ? product.description : ''}
          />
        </View>
      </View>
    </EmptyCard>
  );
};

export default GenInfoCard;
