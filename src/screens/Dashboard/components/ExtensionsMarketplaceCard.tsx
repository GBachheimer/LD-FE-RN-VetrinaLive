import React from 'react';
import { StyleSheet, Linking } from 'react-native';
import Card from 'src/components/Card/Card';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import ExtensionCard from 'src/components/ExtensionCard/ExtensionCard';
import colors from 'src/constants/colors';

const ExtensionsMarketplaceCard = () => {
  return (
    <Card
      icon={
        <MaterialIcons
          name="add-chart"
          size={28}
          color={colors.light.newText}
        />
      }
      title="Extensions Marketplace"
      linkText="Discover all extensions"
      linkAction={() => Linking.openURL('http://google.com')}
      linkIcon={
        <AntDesign name="arrowright" size={24} color={colors.light.blue} />
      }>
      <ScrollView horizontal={true} style={styles.scrollView}>
        <ExtensionCard
          icon={
            <MaterialCommunityIcons
              name="web"
              size={100}
              color={colors.light.white}
            />
          }
          subTitle="Custom Domain"
          color={colors.light.orange}
        />
        <ExtensionCard
          title1="+50"
          title2="Products"
          subTitle="+50 Products"
          color={colors.light.wak}
        />
        <ExtensionCard
          icon={
            <MaterialCommunityIcons
              name="web"
              size={24}
              color={colors.light.white}
            />
          }
          subTitle="Custom Domain"
          color={colors.light.orange}
        />
      </ScrollView>
    </Card>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    overflow: 'scroll',
  },
});

export default ExtensionsMarketplaceCard;
