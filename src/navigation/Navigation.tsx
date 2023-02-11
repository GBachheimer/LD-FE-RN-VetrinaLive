import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import React, { useContext } from 'react';
import { ColorSchemeName } from 'react-native';
import DrawerNavigator from './DrawerNavigator/DrawerNavigator';
import RootNavigator from './RootNavigator';

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {user ? <DrawerNavigator /> : <RootNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
