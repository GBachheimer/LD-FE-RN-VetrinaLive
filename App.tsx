import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/navigation/Navigation';

const App = (): JSX.Element => {
  const colorScheme = useColorScheme();

  const container = {
    backgroundColor: colorScheme ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={container}>
      <Navigation colorScheme={colorScheme} />
    </SafeAreaView>
  );
};

export default App;
