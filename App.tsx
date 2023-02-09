import React from 'react';
import {SafeAreaView, useColorScheme, View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from 'navigation/screens/Home';

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Home = (): JSX.Element => (<View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}><Text style = {{color: 'black'}}>Test</Text></View>);

  return (
    // <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    // </SafeAreaView>
  );
};

export default App;
