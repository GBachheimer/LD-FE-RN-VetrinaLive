import React from 'react';
import { View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from 'src/constants/colors';

const MenuArrows = () => {
  return (
    <View>
      <MaterialIcons
        name="keyboard-arrow-up"
        size={18}
        color={colors.light.newText}
      />
      <MaterialIcons
        name="keyboard-arrow-down"
        size={18}
        color={colors.light.newText}
      />
    </View>
  );
};

export default MenuArrows;
