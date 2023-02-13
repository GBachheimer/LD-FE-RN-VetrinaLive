import EmptyCard from 'src/components/EmptyCard/EmptyCard';
import React from 'react';
import { View, Text } from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './GenInfoCard.style';
import colors from 'src/constants/colors';

const GenInfoCard = () => {
  return (
    <EmptyCard>
      <Text style={styles.title}>General information</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Product name</Text>
        <TextInput style={styles.input} placeholder="product name" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <View style={styles.input}>
          <View style={styles.descriptionOptions}>
            <TouchableOpacity>
              <Foundation
                name="bold"
                size={32}
                color={colors.light.middleGrey}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5
                name="italic"
                size={24}
                color={colors.light.middleGrey}
              />
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
              <Feather
                name="link-2"
                size={24}
                color={colors.light.middleGrey}
              />
            </TouchableOpacity>
          </View>
          <TextInput
            editable
            multiline
            numberOfLines={8}
            maxLength={5000}
            style={styles.descriptionBox}
            placeholder="Decription 0/5000"
          />
        </View>
      </View>
    </EmptyCard>
  );
};

export default GenInfoCard;
