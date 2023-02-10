import auth from '@react-native-firebase/auth';

export const handleSignup = (email:string, password:string) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};