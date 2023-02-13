import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Divider from './components/Divider/Divider';
import FormHeader from './components/FormHeader/FormHeader';
import ExtraOptions from './components/ExtraOptions/ExtraOptions';
import Support from './components/Support/Support';
import { FormTemplateProps } from './formTemplateTypes';
import { styles } from './FormTemplate.style';

const FormTemplate = (props: FormTemplateProps) => {
  const {
    navigation,
    children,
    submitText,
    submitAction,
    divider,
    footerText1,
    footerText2,
    footerLink,
    extraOptions,
    title,
    subtitle,
    footerAction,
  } = props;

  return (
    <>
      <FormHeader title={title} subtitle={subtitle} />
      {children}
      {submitAction && (
        <TouchableOpacity style={styles.submit} onPress={submitAction}>
          <Text style={styles.submitText}>{submitText}</Text>
        </TouchableOpacity>
      )}
      {divider && <Divider />}
      {extraOptions && <ExtraOptions />}
      {footerText2 && (
        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.resetPass}>{footerText1}</Text>
        </TouchableOpacity>
      )}
      {footerLink && (
        <View style={styles.formFooter}>
          {footerText2 ? (
            <Text>{footerText2} </Text>
          ) : footerText1 ? (
            <Text>{footerText1} </Text>
          ) : null}
          <TouchableOpacity onPress={footerAction}>
            <Text style={styles.redirect}>{footerLink}</Text>
          </TouchableOpacity>
        </View>
      )}
      <Support />
    </>
  );
};

export default FormTemplate;
