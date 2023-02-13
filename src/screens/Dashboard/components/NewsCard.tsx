import React from 'react';
import { StyleSheet, Linking, Image } from 'react-native';
import Card from 'src/components/Card/Card';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImageCard from 'src/components/ImageCard/ImageCard';
import colors from 'src/constants/colors';

const NewsCard = () => {
  return (
    <Card
      icon={
        <AntDesign name="filetext1" size={28} color={colors.light.newText} />
      }
      title="Latest news"
      linkText="Visit our blog"
      linkAction={() => Linking.openURL('http://google.com')}
      linkIcon={
        <Feather name="external-link" size={24} color={colors.light.blue} />
      }>
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
