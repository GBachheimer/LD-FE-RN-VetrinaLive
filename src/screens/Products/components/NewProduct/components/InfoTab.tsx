import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DetailsCard from './DetailsCard/DetailsCard';
import GeneralInfomationCard from './GenInfoCard/GenInfoCard';
import PriceCard from './PriceCard/PriceCard';
import ProductTypeCard from './ProductTypeCard/ProductTypeCard';

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
