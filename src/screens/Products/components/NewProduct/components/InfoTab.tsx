import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DetailsCard from './DetailsCard';
import GeneralInfomationCard from './GeneralInfomationCard';
import PriceCard from './PriceCard';
import ProductTypeCard from './ProductTypeCard';

const InfoTab = () => {
  return (
    <ScrollView style={styles.container}>
      <GeneralInfomationCard />
      <PriceCard />
      <DetailsCard />
      <ProductTypeCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default InfoTab;
