import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  children: string | JSX.Element;
};

const Card = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <View style={styles.mainCardView}>
          <View style={styles.row}>
            <Text>Icon</Text>
            <Text>Title</Text>
            <Text>Option</Text>
          </View>
          <View style={styles.row}>{children}</View>
          <View style={styles.row}>
            <Text style={styles.link}>
              <Text>Link</Text>
              <Icon name="arrowright" color="black" size={14} />
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 3,
    height: 400,
    padding: 20,
    zIndex: 1,
    alignItems: 'center',
    width: '100%',
  },
  mainCardView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3,
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  link: {
    alignItems: 'center',
  },
});

export default Card;
