import React from 'react';
import { StyleSheet, Linking } from 'react-native';
import Card from 'src/components/Card/Card';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import ExtensionCard from 'src/components/ExtensionCard/ExtensionCard';

const ExtensionsMarketplaceCard = () => {
  return (
    <Card
      icon={<MaterialIcons name="add-chart" size={28} color="#103B66" />}
      title="Extensions Marketplace"
      linkText="Discover all extensions"
      linkAction={() => Linking.openURL('http://google.com')}
      linkIcon={<AntDesign name="arrowright" size={24} color="#21B8F9" />}>
      <ScrollView horizontal={true} style={styles.scrollView}>
        <ExtensionCard
          icon={<MaterialCommunityIcons name="web" size={100} color="#fff" />}
          subTitle="Custom Domain"
          color="#FFA26B"
        />
        <ExtensionCard
          title1="+50"
          title2="Products"
          subTitle="+50 Products"
          color="#00C48C"
        />
        <ExtensionCard
          icon={<MaterialCommunityIcons name="web" size={24} color="#fff" />}
          subTitle="Custom Domain"
          color="#FFA26B"
        />
      </ScrollView>
    </Card>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // width: '90%',
    overflow: 'scroll',
  },
});

export default ExtensionsMarketplaceCard;
