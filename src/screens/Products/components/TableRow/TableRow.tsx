import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { styles } from './TableRow.style';
import colors from 'src/constants/colors';

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
        <Text numberOfLines={1} style={style ? style : styles.text}>
          {name}
        </Text>
      </View>
      <View style={styles.box2}>
        <Text style={style ? style : styles.text}>{price}</Text>
      </View>
      <View style={styles.box3}>
        <TouchableOpacity>
          <SimpleLineIcons name="options" size={20} color={colors.light.text} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TableRow;
