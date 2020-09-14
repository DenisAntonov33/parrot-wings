import React, { useCallback, useMemo } from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList, AuthRoutes } from '../../types';
import stylePatterns from '../../../../constants/stylePatterns';
import PrimaryBtn from '../../../../components/buttons/PrimaryBtn';
import InputGroup from '../../../../components/InputGroup';
import { inject, observer } from 'mobx-react';
import Auth from '../../mobx/Auth';

interface Props {
  navigation: StackNavigationProp<AuthStackParamList>;
  auth: typeof Auth;
}

const SignUp: React.FC<Props> = (props) => {
  const { navigation, auth } = props;
  const { signUpForm, updateSignUpForm, signUp } = auth;

  const signIn = useCallback(() => {
    navigation.navigate(AuthRoutes.logIn);
  }, [navigation]);

  const btnDisabled = useMemo(() => {
    const fieldsIsFill = signUpForm.every((item) => item.value);
    const passwordIsValid = signUpForm[2].value === signUpForm[3].value;
    return !fieldsIsFill || !passwordIsValid;
  }, [signUpForm]);

  return (
    <View style={stylePatterns.container}>
      <View style={stylePatterns.formContainer}>
        <InputGroup
          fields={signUpForm}
          onChange={updateSignUpForm}
          onSubmit={signUp}
        />
        <PrimaryBtn title="sign up" onPress={signUp} disabled={btnDisabled} />
        <Text style={stylePatterns.mainText}>Already have an account?</Text>
        <Text style={stylePatterns.accentText} onPress={signIn}>
          Sign in
        </Text>
      </View>
    </View>
  );
};

export default inject('auth')(observer(SignUp));
