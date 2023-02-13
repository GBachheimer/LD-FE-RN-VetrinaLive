import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './FormHeader.style';

type FormHeaderProps = {
  title?: string;
  subtitle?: string;
};

const FormHeader = ({ title, subtitle }: FormHeaderProps) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default FormHeader;
