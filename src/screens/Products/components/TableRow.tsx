import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

type Props = {
  image?: string | undefined;
  name?: string | undefined;
  price?: string | number | undefined;
  style?: object | undefined;
};

const TableRow = ({ image, name, price, style }: Props) => {
  return (
    <>
      <View style={styles.box1}>
        {image && (
          <Image
            source={{
              uri: image,
            }}
            style={styles.avatar}
          />
        )}
        <Text style={style ? style : styles.text}>{name}</Text>
      </View>
      <View style={styles.box2}>
        <Text style={style ? style : styles.text}>{price}</Text>
      </View>
      <View style={styles.box3}>
        <TouchableOpacity>
          <SimpleLineIcons name="options" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  box1: {
    width: '55%',
    height: '100%',
    borderRightWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box2: {
    width: '30%',
    height: '100%',
    borderRightWidth: 0.5,
    justifyContent: 'center',
  },
  box3: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginLeft: 15,
  },
  text: {
    color: '#103B66',
    fontSize: 18,
    marginLeft: 15,
  },
});

export default TableRow;
