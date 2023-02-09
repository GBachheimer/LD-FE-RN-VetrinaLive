import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = () => {
  return (
		<View style = {styles.mainContainer}>
			<Text>
				Home
			</Text>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});