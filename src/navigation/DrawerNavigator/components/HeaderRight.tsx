import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from '../DrawerNavigator.styles';
import colors from 'src/constants/colors';

const HeaderRight = () => {
  return (
    <View style={styles.headerRight}>
      <TouchableOpacity>
        <AntDesign
          name="search1"
          size={24}
          color={colors.light.newText}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign
          name="filter"
          size={24}
          color={colors.light.newText}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;
