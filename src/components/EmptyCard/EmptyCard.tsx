import React from 'react';
import { View } from 'react-native';
import { styles } from './EmptyCard.style';

const EmptyCard = ({ children, style }: any) => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.mainCardView, ...style }}>{children}</View>
    </View>
  );
};

export default EmptyCard;
