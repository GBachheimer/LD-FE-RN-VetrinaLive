import EmptyCard from 'src/components/EmptyCard/EmptyCard';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './SubscriptionOptions.style';
import colors from 'src/constants/colors';

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
            <FontAwesome name="euro" size={16} color={colors.light.newText} />
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

export default SubscriptionOptions;
