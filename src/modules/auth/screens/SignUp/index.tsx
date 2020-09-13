import React, { useCallback } from 'react';
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

  return (
    <View style={stylePatterns.container}>
      <InputGroup
        fields={signUpForm}
        onChange={updateSignUpForm}
        onSubmit={signUp}
      />
      <Text>Login screen</Text>
      <PrimaryBtn title="sign up" onPress={signUp} />
      <Text>Already have an account?</Text>
      <Text onPress={signIn}>Sign in</Text>
    </View>
  );
};

export default inject('auth')(observer(SignUp));
