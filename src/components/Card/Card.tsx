import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { styles } from './Card.style';
import colors from 'src/constants/colors';

type Props = {
  children?: JSX.Element | React.ReactNode | React.ReactElement;
  icon?: JSX.Element | undefined;
  title?: string | undefined;
  option?: string | JSX.Element | undefined;
  linkText?: string | undefined;
  linkAction?: (event: GestureResponderEvent) => Promise<any> | undefined;
  linkIcon?: JSX.Element | undefined;
  backColor?: string | undefined;
  style?: object;
};

const Card = ({
  children,
  icon,
  title,
  option,
  linkText,
  linkAction,
  linkIcon,
  backColor,
  style,
}: Props) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <TouchableWithoutFeedback>
        <View
          style={{
            ...styles.mainCardView,
            backgroundColor: backColor ? backColor : colors.light.white,
          }}>
          {title && (
            <View style={styles.row}>
              <Text>{icon}</Text>
              <Text style={styles.title}>{title}</Text>
              <Text>{option}</Text>
            </View>
          )}
          {children && <View style={styles.childrenRow}>{children}</View>}
          {linkText && (
            <View style={styles.lastRow}>
              <Text style={styles.link} onPress={linkAction}>
                {linkText}
              </Text>
              {linkIcon}
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Card;
