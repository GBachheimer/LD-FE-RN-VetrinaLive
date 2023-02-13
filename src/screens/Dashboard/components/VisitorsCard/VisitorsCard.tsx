import React from 'react';
import { Text, Linking, View } from 'react-native';
import Card from 'src/components/Card/Card';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from 'src/constants/colors';
import { styles } from './VisitorsCard.style';

const VisitorsCard = () => {
  return (
    <Card
      icon={<Feather name="eye" size={28} color={colors.light.newText} />}
      title="Visitors"
      option={
        <View style={styles.periodOption}>
          <Text>This month</Text>
          <MaterialIcons
            name="arrow-drop-down"
            size={24}
            color={colors.light.text}
          />
        </View>
      }
      linkText="Do you want to receive more visits? Contact us!"
      linkAction={() => Linking.openURL('http://google.com')}
      linkIcon={
        <AntDesign name="arrowright" size={24} color={colors.light.blue} />
      }>
      <Text style={styles.visitors}>0</Text>
    </Card>
  );
};

export default VisitorsCard;
