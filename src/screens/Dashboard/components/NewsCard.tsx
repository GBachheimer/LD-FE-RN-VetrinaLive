import React, { useEffect, useState } from 'react';
import { StyleSheet, Linking, Image, ActivityIndicator } from 'react-native';
import Card from 'src/components/Card/Card';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImageCard from 'src/components/ImageCard/ImageCard';
import colors from 'src/constants/colors';
import { getNews } from 'src/api/getNews';

type NewsItem = {
  publishedAt: string | undefined;
  urlToImage: string | undefined;
  title: string | undefined;
  description: string | undefined;
};

const NewsCard = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getNews(setData, setLoading);
  }, []);

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
      <>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            {data.map((newsItem: NewsItem, index) => {
              if (index > 5 || !newsItem.urlToImage) {
                return;
              }
              return (
                <ImageCard
                  key={newsItem.publishedAt}
                  image={
                    <Image
                      style={styles.image}
                      source={{
                        uri: newsItem.urlToImage,
                      }}
                    />
                  }
                  title={newsItem.title}
                  subTitle={newsItem.description}
                  timeToRead={newsItem.publishedAt}
                />
              );
            })}
          </>
        )}
      </>
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
