import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList, AuthRoutes } from '../../types';
import stylePatterns from '../../../../constants/stylePatterns';
import PrimaryBtn from '../../../../components/buttons/PrimaryBtn';
import InputGroup from '../../../../components/InputGroup';
import Auth from '../../mobx/Auth';
import { inject, observer } from 'mobx-react';

interface Props {
  navigation: StackNavigationProp<AuthStackParamList>;
  auth: typeof Auth;
}

const Login: React.FC<Props> = (props) => {
  const { navigation, auth } = props;
  const { signInForm, updateSignInForm, signIn } = auth;
  const signUp = useCallback(() => {
    navigation.navigate(AuthRoutes.signUp);
  }, [navigation]);

  return (
    <View style={stylePatterns.container}>
      <InputGroup
        fields={signInForm}
        onChange={updateSignInForm}
        onSubmit={signIn}
      />
      <PrimaryBtn title="Sign in" onPress={signIn} />
      <Text>Don't have an account yet?</Text>
      <Text onPress={signUp}>Sign up</Text>
    </View>
  );
};

export default inject('auth')(observer(Login));
