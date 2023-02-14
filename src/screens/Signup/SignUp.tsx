import React, { useState } from 'react';
import FormTemplate from 'src/components/FormTemplate/FormTemplate';
import CompanyText from 'src/components/Header/CompanyText/CompanyText';
import Header from 'src/components/Header/Header/Header';
import { TextInput, View } from 'react-native';
import { styles } from './SignUp.style';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { handleSignup } from 'src/api/auth/handleSignup';

const SignUp = ({ navigation }: any): JSX.Element => {
  const [shopName, setShopName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleshopName = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    setShopName(event.nativeEvent.text);
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
          submitAction={() => handleSignup(shopName, email, password)}
          divider={true}
          extraOptions={true}
          footerText1="Do you have an account?"
          footerLink="Sign in now"
          footerAction={() => navigation.navigate('Login')}>
          <TextInput
            style={styles.textInput}
            placeholder="Shop name"
            value={shopName}
            onChange={handleshopName}
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
