import auth from '@react-native-firebase/auth';

export const handleResetPass = (email: string, navigation: any): void => {
  auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      navigation.navigate('Login');
      alert('Email sent!');
    })
    .catch(error => {
      const errorCode = error.code;
      alert('Something went wrong!');
      if (
        errorCode === 'auth/missing-email' ||
        errorCode === 'auth/invalid-email' ||
        errorCode === 'auth/user-not-found'
      ) {
        alert('Please provide a valid email address!');
      }
    });
};
