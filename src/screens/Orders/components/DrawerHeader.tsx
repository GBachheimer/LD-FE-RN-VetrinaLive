import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DrawerHeader = ({ closeDrawer }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.orderNr}>Order: #2222</Text>
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
          color="#103B66"
          style={styles.closeIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
  },
  tinyLogo: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  orderNr: {
    width: '50%',
    fontSize: 18,
    color: '#103B66',
  },
  print: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  printText: {
    color: '#21B8F9',
    fontSize: 16,
  },
  close: {
    width: 80,
  },
  closeIcon: {
    marginLeft: 55,
  },
});

export default DrawerHeader;
