import React from 'react';
import Card from '../../../../components/Card/Card';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Linking, Text, View, StyleSheet } from 'react-native';

const ConfigureShopCard = () => {
  return (
    <Card
      icon={<SimpleLineIcons name="wrench" size={28} color="#103B66" />}
      title="Configure your shop!"
      linkText="Complete the configuration"
      linkAction={() => Linking.openURL('http://google.com')}
      linkIcon={<AntDesign name="arrowright" size={24} color="#21B8F9" />}
      style={styles.cardStyle}>
      <>
        <View style={styles.percentageConatiner}>
          <Text style={styles.percentage}>0%</Text>
          <Text style={styles.percentage}>complete</Text>
        </View>
        <Text style={styles.additionalText}>
          Complete all the steps to receive greater visibility and an attractive
          showcase!
        </Text>
      </>
    </Card>
  );
};

const styles = StyleSheet.create({
  percentageConatiner: {
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  percentage: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: 'red',
  },
  additionalText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    color: '#7D8A99',
    padding: 10,
  },
  cardStyle: {
    marginTop: 200,
  },
});

export default ConfigureShopCard;
