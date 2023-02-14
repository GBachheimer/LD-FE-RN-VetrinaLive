import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DetailsCard from './DetailsCard/DetailsCard';
import GeneralInfomationCard from './GenInfoCard/GenInfoCard';
import PriceCard from './PriceCard/PriceCard';
import ProductTypeCard from './ProductTypeCard/ProductTypeCard';

const InfoTab = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView style={styles.container}>
        <GeneralInfomationCard />
        <PriceCard />
        <DetailsCard />
        <ProductTypeCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default InfoTab;
