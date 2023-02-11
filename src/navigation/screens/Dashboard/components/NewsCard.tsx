import React from 'react';
import { Text, StyleSheet, Linking, View, Image } from 'react-native';
import Card from '../../../../components/Card/Card';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImageCard from '../../../../components/ImageCard/ImageCard';

const NewsCard = () => {
  return (
    <Card
      icon={<AntDesign name="filetext1" size={28} color="#103B66" />}
      title="Latest news"
      linkText="Visit our blog"
      linkAction={() => Linking.openURL('http://google.com')}
      linkIcon={<Feather name="external-link" size={24} color="#21B8F9" />}>
      <ImageCard
        image={
          <Image
            style={styles.image}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        }
        title="E-COMMERCE TIPS"
        subTitle="13 tips on how to write a bussiness plan with success"
        timeToRead="time to read: 5 min"
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: '100%',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
});

export default NewsCard;
