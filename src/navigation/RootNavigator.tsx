import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from 'src/screens/Login/Login';
import SignUp from 'src/screens/Signup/SignUp';
import ResetPassword from 'src/screens/ResetPassword/ResetPassword';
import NotFoundScreen from 'src/screens/NotFound/NotFound';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="*"
        component={NotFoundScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
