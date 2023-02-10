import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Dashboard.style';
import SubHeader from './components/SubHeader';
import Card from './components/Card';
import NewsList from './components/NewsList';
import SwipableCards from './components/SwipableCards';
import AdsCard from './components/AdsCard';

const Dashboard = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <SubHeader />
      <Card />
      <Card />
      <Card />
      <NewsList />
      <SwipableCards />
      <AdsCard />
      <Card />
      <Card />
    </View>
  );
};

export default Dashboard;
