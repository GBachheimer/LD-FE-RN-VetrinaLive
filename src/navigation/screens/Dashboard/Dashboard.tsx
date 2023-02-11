import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './Dashboard.style';
import SubHeader from './components/SubHeader';
import NewsCard from './components/NewsCard';
import SwipableCards from './components/SwipableCards';
import AdsCard from './components/AdsCard';
import ConfigureShopCard from './components/ConfigureShopCard';
import VisitorsCard from './components/VisitorsCard';
import OrdersCard from './components/OrdersCard';

const Dashboard = ({ navigation }: any) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <SubHeader />
      <ConfigureShopCard />
      <VisitorsCard />
      <OrdersCard />
      <NewsCard />
      <SwipableCards />
      <AdsCard />
    </ScrollView>
  );
};

export default Dashboard;
