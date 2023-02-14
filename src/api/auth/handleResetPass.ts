import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export const handleResetPass = (email: string, navigation: any): void => {
  if (email === '') {
    Alert.alert('Please provide an email!');
    return;
  }
  auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      navigation.navigate('Login');
      Alert.alert('Email sent!');
    })
    .catch(error => {
      const errorCode = error.code;
      Alert.alert('Something went wrong!');
      if (
        errorCode === 'auth/missing-email' ||
        errorCode === 'auth/invalid-email' ||
        errorCode === 'auth/user-not-found'
      ) {
        Alert.alert('Please provide a valid email address!');
      }
    });
};
