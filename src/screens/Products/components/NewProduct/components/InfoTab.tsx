import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DetailsCard from './DetailsCard/DetailsCard';
import GeneralInfomationCard from './GenInfoCard/GenInfoCard';
import PriceCard from './PriceCard/PriceCard';
import ProductTypeCard from './ProductTypeCard/ProductTypeCard';

type Props = {
  navigation: any;
  product?: {
    id?: number;
    title?: string;
    price?: string;
    category?: string;
    description?: string;
    image?: string;
  };
};

const InfoTab = ({ navigation, product }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView style={styles.container}>
        <GeneralInfomationCard product={product} />
        <PriceCard product={product} />
        <DetailsCard product={product} />
        <ProductTypeCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default InfoTab;
