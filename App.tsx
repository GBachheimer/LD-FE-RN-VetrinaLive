import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView, useColorScheme } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { AuthProvider } from './src/context/AuthContext';

const App = (): JSX.Element => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthProvider>
        <Navigation colorScheme={colorScheme} />
      </AuthProvider>
    </SafeAreaView>
  );
};

export default App;
