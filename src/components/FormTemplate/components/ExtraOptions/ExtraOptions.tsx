import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { handleGoogleSignin } from 'src/api/auth/handleGoogleSignin';
import { handleFacebookSignin } from 'src/api/auth/handleFacebookSignin';
import { styles } from './ExtraOptions.style';

const ExtraOptions = () => {
  return (
    <>
      <TouchableOpacity
        style={styles.extraSubmit}
        onPress={handleFacebookSignin}>
        <Image
          source={require('src/assets/images/Vector.png')}
          style={styles.img}
        />
        <Text style={styles.submitText2}> Sign in with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.extraSubmit} onPress={handleGoogleSignin}>
        <Image
          source={require('src/assets/images/google-login.png')}
          style={styles.img}
        />
        <Text style={styles.submitText2}> Sign in with Google</Text>
      </TouchableOpacity>
    </>
  );
};

export default ExtraOptions;
