import auth from '@react-native-firebase/auth';

export const handleLogin = (email:string, password:string, navigator:any) => {
  auth()
    .createUserWithEmailAndPassword(email, password, navigator)
    .then(() => {
      navigator.navigate('Dashboard');
    })
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
