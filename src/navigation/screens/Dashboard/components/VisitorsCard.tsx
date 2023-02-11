import React from 'react';
import { Text, StyleSheet, Linking, View } from 'react-native';
import Card from '../../../../components/Card/Card';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const VisitorsCard = () => {
  return (
    <Card
      icon={<Feather name="eye" size={28} color="#103B66" />}
      title="Visitors"
      option={
        <View style={styles.periodOption}>
          <Text>This month</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="#000" />
        </View>
      }
      linkText="Do you want to receive more visits? Contact us!"
      linkAction={() => Linking.openURL('http://google.com')}
      linkIcon={<AntDesign name="arrowright" size={24} color="#21B8F9" />}>
      <Text style={styles.visitors}>0</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  visitors: {
    fontSize: 50,
    color: '#103B66',
    fontWeight: 'bold',
  },
  periodOption: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default VisitorsCard;
