import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import FormTemplate from 'src/components/FormTemplate/FormTemplate';
import { styles } from './Login.style';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import CompanyText from 'src/components/Header/CompanyText/CompanyText';
import Header from 'src/components/Header/Header/Header';
import { handleLogin } from 'src/api/auth/handleLogin';

type LoginScreenProps = {
  navigation: any;
};

const Login = (props: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Header>
        <CompanyText />
      </Header>
      <View style={styles.body}>
        <FormTemplate
          navigation={navigation}
          title="Welcome"
          subtitle="Enter your email and password to enter your account."
          submitText="Login"
          submitAction={() => handleLogin(email, password)}
          divider={true}
          extraOptions={true}
          footerText1="Did you forget your password?"
          footerText2="Don't you have an account?"
          footerLink="Sign up now"
          footerAction={() => navigation.navigate('SignUp')}>
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

export default Login;
