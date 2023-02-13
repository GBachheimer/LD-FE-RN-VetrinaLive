import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EmptyCard from 'src/components/EmptyCard/EmptyCard';
import { RadioButton } from 'react-native-paper';

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
            color="#21B8F9"
          />
        </View>
        <Text style={styles.text}>Physical</Text>
        <View style={styles.radioView2}>
          <RadioButton
            value="Digital"
            status={checked === 'Digital' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Digital')}
            color="#21B8F9"
          />
        </View>
        <Text style={styles.text}>Digital</Text>
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
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15,
  },
  text: {
    fontSize: 18,
    color: '#103B66',
  },
  radioView1: {
    transform: [{ scale: 1.5 }],
    marginRight: 10,
  },
  radioView2: {
    transform: [{ scale: 1.5 }],
    marginRight: 10,
    marginLeft: 20,
  },
});

export default ProductTypeCard;
