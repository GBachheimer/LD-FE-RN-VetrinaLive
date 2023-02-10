import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './Dashboard.style';
import SubHeader from './components/SubHeader';
import Card from './components/Card';
import NewsList from './components/NewsList';
import SwipableCards from './components/SwipableCards';
import AdsCard from './components/AdsCard';

const Dashboard = ({ navigation }: any) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <SubHeader />
      <Card />
      <Card />
      <Card />
      <NewsList />
      <SwipableCards />
      <AdsCard />
      <Card />
      <Card />
    </ScrollView>
  );
};

export default Dashboard;
