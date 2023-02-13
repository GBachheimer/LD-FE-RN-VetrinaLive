import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SubscriptionHeader from './components/SubscriptionHeader';
import SubscriptionOptions from './components/SubscriptionOptions';
import { FlatList } from 'react-native-gesture-handler';
import {
  subscriptionMonth,
  subscriptionYear,
} from '../../../constants/subscriptionOptions';

const Subscription = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const subscriptionOption = isEnabled ? subscriptionYear : subscriptionMonth;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your plan</Text>
      <SubscriptionHeader isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
      <FlatList
        data={subscriptionOption}
        renderItem={({ item }) => (
          <SubscriptionOptions
            title={item.title}
            benefit={item.benefit}
            price={item.price}
            period={item.period}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    color: '#103B66',
    marginTop: 30,
    width: '100%',
    textAlign: 'center',
  },
});

export default Subscription;
