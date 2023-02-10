import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import CompanyText from '../../../components/Header/CompanyText';
import FormTemplate from '../../../components/FormTemplate/FormTemplate';
import {
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View,
} from 'react-native';
import { styles } from './ResetPassword.style';
import { handleResetPass } from '../../../api/auth/handleResetPass';

const ResetPassword = ({navigation}: any) => {
  const [email, setEmail] = useState('');

  const handleEmail = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    setEmail(event.nativeEvent.text);
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation}>
        <CompanyText />
      </Header>
      <View style={styles.body}>
        <FormTemplate
          navigation={navigation}
          title="Forgot Password"
          subtitle="Enter your email and you'll receive an email to recover ypur password."
          submitText="Send email"
          submitAction={() => handleResetPass(email)}
          divider={false}
          extraOptions={false}
          footerText1="Do you have an account?"
          footerLink="Sign in now"
          footerAction={() => navigation.navigate('Login')}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
        </FormTemplate>
      </View>
    </View>
  );
};

export default ResetPassword;
