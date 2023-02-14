import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export const handleLogin = (email: string, password: string) => {
  if (email === '' || password === '') {
    Alert.alert('Plase complete all fields...');
    return;
  }
  auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
      }

      Alert.alert(error.message);
    });
};
