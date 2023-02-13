import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './Support.style';
import colors from 'src/constants/colors';

const Support = () => {
  return (
    <TouchableOpacity style={styles.support}>
      <Icon
        name="headphones"
        size={30}
        color={colors.light.newText}
        style={styles.icon}
      />
      <Text style={styles.supportText}>Support</Text>
    </TouchableOpacity>
  );
};

export default Support;
