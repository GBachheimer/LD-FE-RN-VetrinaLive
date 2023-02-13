import React from 'react';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import { Linking } from 'react-native';
import { styles } from './SubHeader.style';
import colors from 'src/constants/colors';

const SubHeader = () => {
  return (
    <LinearGradient
      colors={['#21B8F9', '#AED6F1']}
      style={styles.linearGradient}>
      <Text style={styles.welcome}>Welcome Mario!</Text>
      <Text
        onPress={() => Linking.openURL('http://google.com')}
        style={styles.link}>
        <Text style={styles.storeLink}>app.vetrinalive.com/mario-store</Text>
        <Icon name="external-link" size={24} color={colors.light.white} />
      </Text>
    </LinearGradient>
  );
};

export default SubHeader;
