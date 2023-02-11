import React from 'react';
import { Text, StyleSheet, Linking } from 'react-native';
import Card from '../../../../components/Card/Card';
import AntDesign from 'react-native-vector-icons/AntDesign';

const InviteFriendsCard = () => {
  return (
    <Card
      icon={<AntDesign name="addusergroup" size={28} color="#103B66" />}
      title="Invite a friend!"
      linkText="Start inviting friend!"
      linkAction={() => Linking.openURL('http://google.com')}
      linkIcon={<AntDesign name="arrowright" size={24} color="#21B8F9" />}>
      <Text>
        <Text style={styles.textGreen}>Receive 50 products </Text>
        <Text style={styles.textBlue}>
          by inviting a friend who subscribes to a plan. Your friend will
          receive a 30% discount coupon valid for any plan.
        </Text>
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  textGreen: {
    color: '#00C48C',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textBlue: {
    color: '#103B66',
    fontSize: 18,
  },
});

export default InviteFriendsCard;
