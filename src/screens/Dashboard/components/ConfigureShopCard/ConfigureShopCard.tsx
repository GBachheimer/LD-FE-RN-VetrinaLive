import React from 'react';
import Card from 'src/components/Card/Card';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Linking, Text, View } from 'react-native';
import { styles } from './ConfigureShopCard.style';
import colors from 'src/constants/colors';

const ConfigureShopCard = () => {
  return (
    <Card
      icon={
        <SimpleLineIcons name="wrench" size={28} color={colors.light.newText} />
      }
      title="Configure your shop!"
      linkText="Complete the configuration"
      linkAction={() => Linking.openURL('http://google.com')}
      linkIcon={
        <AntDesign name="arrowright" size={24} color={colors.light.blue} />
      }
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

export default ConfigureShopCard;
