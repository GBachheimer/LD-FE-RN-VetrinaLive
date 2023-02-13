import React from 'react';
import EmptyCard from 'src/components/EmptyCard/EmptyCard';
import { View, Text, Image, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './Payments.style';
import { paymentOptions } from 'src/constants/paymentOptions';

const Payments = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment methods</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={paymentOptions}
          renderItem={({ item }) => {
            return (
              <EmptyCard key={item.name}>
                <View style={styles.cardHeader}>
                  <Image style={item.style} source={item.src} />
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{item.action}</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.optionName}>{item.name}</Text>
              </EmptyCard>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Payments;
