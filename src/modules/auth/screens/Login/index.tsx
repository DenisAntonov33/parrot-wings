import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList, AuthRoutes } from '../../types';
import stylePatterns from '../../../../constants/stylePatterns';
import PrimaryBtn from '../../../../components/buttons/PrimaryBtn';
import InputGroup from '../../../../components/InputGroup';
import { InputField } from '../../../../types';

interface Props {
  navigation: StackNavigationProp<AuthStackParamList>;
}

const form: InputField[] = [
  { field: 'login', value: '', error: '', label: 'Login' },
  { field: 'password', value: '', error: '', label: 'Login' },
];

const Login: React.FC<Props> = (props) => {
  const { navigation } = props;
  const [formValue, setFormValue] = useState(form);
  return (
    <View style={stylePatterns.container}>
      <InputGroup fields={formValue} onChange={setFormValue} />
      <Text>Login screen</Text>
      <PrimaryBtn
        title="sign up"
        onPress={() => navigation.navigate(AuthRoutes.signUp)}
      />
    </View>
  );
};

export default Login;
