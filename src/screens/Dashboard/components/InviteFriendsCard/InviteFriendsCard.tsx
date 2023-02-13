import React from 'react';
import { Text, Linking } from 'react-native';
import Card from 'src/components/Card/Card';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from './InviteFriendsCard.style';
import colors from 'src/constants/colors';

const InviteFriendsCard = () => {
  return (
    <Card
      icon={
        <AntDesign name="addusergroup" size={28} color={colors.light.newText} />
      }
      title="Invite a friend!"
      linkText="Start inviting friend!"
      linkAction={() => Linking.openURL('http://google.com')}
      linkIcon={
        <AntDesign name="arrowright" size={24} color={colors.light.blue} />
      }>
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

export default InviteFriendsCard;
