import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { styles } from './ImageCard.style';

type Props = {
  image: JSX.Element;
  title: string | undefined;
  subTitle: string | undefined;
  timeToRead: string | undefined;
};

const ImageCard = ({ image, title, subTitle, timeToRead }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <View style={styles.mainCardView}>
          {image}
          <View style={styles.body}>
            <Text numberOfLines={1} style={styles.title}>
              {title}
            </Text>
            <Text numberOfLines={2} style={styles.subtitle}>
              {subTitle}
            </Text>
            <Text numberOfLines={1} style={styles.timetoread}>
              {timeToRead}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ImageCard;
