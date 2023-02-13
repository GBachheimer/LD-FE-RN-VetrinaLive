import React from 'react';
import { View, Text, Switch } from 'react-native';
import colors from 'src/constants/colors';
import { styles } from './SubscriptionHeader.style';

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
          color: isEnabled ? colors.light.strongGrey : colors.light.newText,
        }}>
        Monthly
      </Text>
      <Switch
        trackColor={{
          false: colors.light.grey,
          true: colors.light.lightBlue,
        }}
        thumbColor={isEnabled ? colors.light.blue : colors.light.strongGrey}
        ios_backgroundColor={colors.light.text}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
      <Text
        style={{
          ...styles.periodText,
          color: isEnabled ? colors.light.newText : colors.light.strongGrey,
        }}>
        Yearly
      </Text>
      <View
        style={{
          ...styles.promo,
          backgroundColor: isEnabled ? colors.light.green : colors.light.grey,
        }}>
        <Text style={styles.promoText}>Promo</Text>
      </View>
    </View>
  );
};

export default SubscriptionHeader;
