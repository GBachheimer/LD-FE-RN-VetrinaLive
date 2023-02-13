import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import Card from 'src/components/Card/Card';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './SupportCard.style';
import colors from 'src/constants/colors';

const SupportCard = () => {
  return (
    <Card
      icon={
        <Feather name="headphones" size={28} color={colors.light.newText} />
      }
      title="Customer support">
      <View style={styles.helpPerson}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682_1280.jpg',
          }}
          style={styles.avatar}
        />
        <Text>Simone is here to help you</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Contact us</Text>
      </TouchableOpacity>
    </Card>
  );
};

export default SupportCard;
