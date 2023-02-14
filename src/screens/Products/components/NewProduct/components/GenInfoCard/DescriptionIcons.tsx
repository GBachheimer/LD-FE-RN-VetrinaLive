import React from 'react';
import { View } from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './GenInfoCard.style';
import colors from 'src/constants/colors';

const DescriptionIcons = () => {
  return (
    <View style={styles.descriptionOptions}>
      <TouchableOpacity>
        <Foundation name="bold" size={32} color={colors.light.middleGrey} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="italic" size={24} color={colors.light.middleGrey} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5
          name="text-width"
          size={24}
          color={colors.light.middleGrey}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5
          name="underline"
          size={24}
          color={colors.light.middleGrey}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="menu" size={24} color={colors.light.middleGrey} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="link-2" size={24} color={colors.light.middleGrey} />
      </TouchableOpacity>
    </View>
  );
};

export default DescriptionIcons;
