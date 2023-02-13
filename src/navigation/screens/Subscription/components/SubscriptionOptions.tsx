import EmptyCard from '../../../../components/EmptyCard/EmptyCard';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = {
  title?: string | undefined;
  benefit?: string | undefined;
  price?: string | undefined;
  period?: string | undefined;
};

const SubscriptionOptions = ({ title, benefit, price, period }: Props) => {
  return (
    <EmptyCard style={styles.card}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.benefit}>{benefit}</Text>
          <View style={styles.bottomLeft}>
            <FontAwesome name="euro" size={16} color="#103B66" />
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.text}>/{period}</Text>
          </View>
        </View>
        <View style={{ ...styles.section, ...styles.sectionRight }}>
          <Text style={styles.text}>Max 150 products</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Change plan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </EmptyCard>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 140,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    height: '100%',
    padding: 15,
  },
  section: {
    width: '50%',
    height: '100%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    color: '#103B66',
  },
  benefit: {
    fontSize: 14,
    color: '#00C48C',
  },
  bottomLeft: {
    flexDirection: 'row',
    alignItems: 'baseline',
    // justifyContent: 'space-between',
  },
  sectionRight: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 26,
    color: '#21B8F9',
    marginLeft: 3,
    marginRight: 3,
  },
  text: {
    fontSize: 18,
    color: '#103B66',
  },
  button: {
    width: 120,
    height: 45,
    borderRadius: 5,
    backgroundColor: '#21B8F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});

export default SubscriptionOptions;
