import React from 'react';
import { View, Text } from 'react-native';
import EmptyCard from 'src/components/EmptyCard/EmptyCard';
import { RadioButton } from 'react-native-paper';
import { styles } from './ProductTypeCard.style';
import colors from 'src/constants/colors';

const ProductTypeCard = () => {
  const [checked, setChecked] = React.useState('first');

  return (
    <EmptyCard>
      <Text style={styles.title}>Product type</Text>
      <View style={styles.radioGroup}>
        <View style={styles.radioView1}>
          <RadioButton
            value="Physical"
            status={checked === 'Physical' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Physical')}
            color={colors.light.blue}
          />
        </View>
        <Text style={styles.text}>Physical</Text>
        <View style={styles.radioView2}>
          <RadioButton
            value="Digital"
            status={checked === 'Digital' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Digital')}
            color={colors.light.blue}
          />
        </View>
        <Text style={styles.text}>Digital</Text>
      </View>
    </EmptyCard>
  );
};

export default ProductTypeCard;
