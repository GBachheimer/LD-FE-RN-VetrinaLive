import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { styles } from './Card.style';

type Props = {
  children?: string | JSX.Element;
  icon?: JSX.Element | undefined;
  title?: string | undefined;
  option?: string | JSX.Element | undefined;
  linkText?: string | undefined;
  linkAction?: (event: GestureResponderEvent) => Promise<any> | undefined;
  linkIcon?: JSX.Element | undefined;
};

const Card = ({
  children,
  icon,
  title,
  option,
  linkText,
  linkAction,
  linkIcon,
}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <View style={styles.mainCardView}>
          <View style={styles.row}>
            <Text>{icon}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text>{option}</Text>
          </View>
          <View style={styles.childrenRow}>{children}</View>
          <View style={styles.lastRow}>
            <Text style={styles.link} onPress={linkAction}>
              {linkText}
            </Text>
            {linkIcon}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Card;
