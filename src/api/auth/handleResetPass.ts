import auth from '@react-native-firebase/auth';

export const handleResetPass = (email: string): void => {
  auth().sendPasswordResetEmail(email).catch(error => {
    console.log(error)
  });
};