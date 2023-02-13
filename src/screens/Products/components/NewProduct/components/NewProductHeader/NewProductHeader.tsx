import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './NewProductHeader.style';
import colors from 'src/constants/colors';

const NewProductHeader = ({ hanldeAddProduct }: any) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={hanldeAddProduct}>
        <View style={styles.backButtonView}>
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            color={colors.light.newText}
          />
          <Text style={styles.buttonText}>All products</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>New Product</Text>
    </View>
  );
};

export default NewProductHeader;
