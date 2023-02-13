import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SubscriptionHeader from './components/SubscriptionHeader/SubscriptionHeader';
import SubscriptionOptions from './components/SubscriptionOptions/SubscriptionOptions';
import { FlatList } from 'react-native-gesture-handler';
import {
  subscriptionMonth,
  subscriptionYear,
} from 'src/constants/subscriptionOptions';
import { styles } from './Subscription.style';

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

export default Subscription;
