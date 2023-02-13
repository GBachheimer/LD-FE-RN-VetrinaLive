import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

type Props = {
  isEnabled?: boolean | undefined;
  toggleSwitch?: ((value: boolean) => void | Promise<void>) | null | undefined;
};

const SubscriptionHeader = ({ isEnabled, toggleSwitch }: Props) => {
  return (
    <View style={styles.period}>
      <Text
        style={{
          ...styles.periodText,
          color: isEnabled ? '#7D8A99' : '#103B66',
        }}>
        Monthly
      </Text>
      <Switch
        trackColor={{ false: '#767577', true: '#AED6F1' }}
        thumbColor={isEnabled ? '#21B8F9' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
      <Text
        style={{
          ...styles.periodText,
          color: isEnabled ? '#103B66' : '#7D8A99',
        }}>
        Yearly
      </Text>
      <View
        style={{
          ...styles.promo,
          backgroundColor: isEnabled ? '#00C48C' : '#999',
        }}>
        <Text style={styles.promoText}>Promo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  period: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  promo: {
    borderRadius: 10,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  promoText: {
    color: '#fff',
  },
  periodText: {
    fontSize: 18,
  },
  switch: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default SubscriptionHeader;
