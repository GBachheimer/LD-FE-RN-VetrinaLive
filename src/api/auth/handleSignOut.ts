import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export const handleSignOut = () => {
  auth()
    .signOut()
    .then(() => Alert.alert('User signed out!'));
};
