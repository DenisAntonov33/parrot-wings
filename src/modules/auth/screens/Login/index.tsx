import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList, AuthRoutes } from '../../types';

interface Props {
  navigation: StackNavigationProp<AuthStackParamList>;

}

const Login: React.FC<Props> = (props) => {
  const { navigation } = props;
  return <View>
    <Text>Login screen</Text>
    <Button title="sign up" onPress={() => navigation.navigate(AuthRoutes.signUp)} />
  </View>
}

export default Login;
