import React, { ReactElement } from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';

type HeaderProps = {
  navigation?: any;
  children?: React.ReactNode | ReactElement;
};

const Header = (props: HeaderProps) => {
  const colorScheme = useColorScheme();
  const { children, navigation } = props;

  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return <View style={[styles.header, themeContainerStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  text: {
    fontSize: 18,
    fontWeight: '900',
  },
  button: {},
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
});

export default Header;
