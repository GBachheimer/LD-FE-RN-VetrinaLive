import React, { ReactElement } from 'react';
import { View, useColorScheme } from 'react-native';
import { styles } from './Header.style';

type HeaderProps = {
  navigation?: any;
  children?: React.ReactNode | ReactElement;
};

const Header = ({ children, navigation }: HeaderProps) => {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return <View style={[styles.header, themeContainerStyle]}>{children}</View>;
};

export default Header;
