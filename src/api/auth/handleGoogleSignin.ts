import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const handleGoogleSignin = async () => {
  GoogleSignin.configure({
    webClientId:
      '454225164497-u4fvu7tj2cpp54fm00purk7gk9u1lucb.apps.googleusercontent.com',
  });
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  return auth().signInWithCredential(googleCredential);
};
