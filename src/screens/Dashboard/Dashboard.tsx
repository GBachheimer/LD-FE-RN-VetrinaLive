import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './Dashboard.style';
import SubHeader from './components/SubHeader/SubHeader';
import NewsCard from './components/NewsCard';
import ExtensionsMarketplaceCard from './components/ExtensionsMarketplaceCard';
import AdsCard from './components/AdsCard/AdsCard';
import ConfigureShopCard from './components/ConfigureShopCard/ConfigureShopCard';
import VisitorsCard from './components/VisitorsCard/VisitorsCard';
import OrdersCard from './components/OrdersCard/OrdersCard';
import SupportCard from './components/SupportCard/SupportCard';
import InviteFriendsCard from './components/InviteFriendsCard/InviteFriendsCard';

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
      <ExtensionsMarketplaceCard />
      <AdsCard />
      <SupportCard />
      <InviteFriendsCard />
    </ScrollView>
  );
};

export default Dashboard;
