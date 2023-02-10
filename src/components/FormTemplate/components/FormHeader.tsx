import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

const styles = StyleSheet.create({
  title: {
    // marginTop: -70,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#103B66',
  },
  subtitle: {
    color: '#546679',
    textAlign: 'center',
    marginTop: 5,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FormHeader;
