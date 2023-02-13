import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from 'src/constants/colors';
import { styles } from './DrawerHeader.style';

const DrawerHeader = ({ closeDrawer, orderNumber }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.orderNr}>
        Order: {orderNumber ? orderNumber : '#2222'}
      </Text>
      <TouchableOpacity style={styles.print}>
        <Image
          style={styles.tinyLogo}
          source={require('src/assets/images/star-filled.png')}
        />
        <Text style={styles.printText}>Print order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.close} onPress={closeDrawer}>
        <AntDesign
          name="close"
          size={24}
          color={colors.light.newText}
          style={styles.closeIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DrawerHeader;
