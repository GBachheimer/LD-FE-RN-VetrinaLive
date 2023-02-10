import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import React, { useContext } from 'react';
import { ColorSchemeName } from 'react-native';
import DrawerNavigator from './DrawerNavigator';
import RootNavigator from './RootNavigator';

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
	const user: boolean = false;

	return (
		<NavigationContainer theme = {colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			{user ? <DrawerNavigator /> : <RootNavigator />}
		</NavigationContainer>
	);
};

export default Navigation;