import React from 'react';
import { View, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';

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
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subTitle}</Text>
            <Text style={styles.timetoread}>{timeToRead}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    padding: 20,
    zIndex: 1,
    alignItems: 'center',
    width: '90%',
  },
  mainCardView: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3,
    flexDirection: 'row',
  },
  title: {
    fontSize: 12,
    color: '#21B8F9',
    padding: 2,
  },
  subtitle: {
    fontSize: 16,
    color: '#103B66',
    padding: 2,
  },
  timetoread: {
    fontSize: 12,
    color: '#7D8A99',
    textDecorationLine: 'underline',
    padding: 2,
  },
  body: {
    padding: 10,
  },
});

export default ImageCard;
