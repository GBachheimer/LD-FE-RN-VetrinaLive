import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const VariantsTab = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>VariantsTab</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default VariantsTab;
