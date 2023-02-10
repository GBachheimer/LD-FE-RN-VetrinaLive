import React, { useState } from 'react';
import FormTemplate from '../../../components/FormTemplate/FormTemplate';
import CompanyText from '../../../components/Header/CompanyText';
import Header from '../../../components/Header/Header';
import { TextInput, View } from 'react-native';
import { styles } from './SignUp.style';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { handleSignup } from '../../../api/auth/handleSignup';

const SignUp = ({navigation}: any): JSX.Element => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullName = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    setFullName(event.nativeEvent.text);
  };

  const handleEmail = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    setEmail(event.nativeEvent.text);
  };

  const handlePassword = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    setPassword(event.nativeEvent.text);
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation}>
        <CompanyText />
      </Header>
      <View style={styles.body}>
        <FormTemplate
          navigation={navigation}
          title="Create your e-commerce"
          subtitle="Try Vetrina Live for free in the next 7 days. Open a shop in few minutes! No credit card required."
          submitText="Create your shop"
          submitAction={() => handleSignup(email, password)}
          divider={true}
          extraOptions={true}
          footerText1="Do you have an account?"
          footerLink="Sign in now"
          footerAction={() => navigation.navigate('Login')}>
          <TextInput
            style={styles.textInput}
            placeholder="Name and Surname"
            value={fullName}
            onChange={handleFullName}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            value={password}
            onChange={handlePassword}
            secureTextEntry={true}
          />
        </FormTemplate>
      </View>
    </View>
  );
};

export default SignUp;
