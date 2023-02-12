import React from 'react';
import { View } from 'react-native';
import { styles } from './EmptyCard.style';

const EmptyCard = ({ children }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainCardView}>{children}</View>
    </View>
  );
};

export default EmptyCard;
