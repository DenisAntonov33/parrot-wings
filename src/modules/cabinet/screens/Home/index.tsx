import React, { useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import stylePatterns from '../../../../constants/stylePatterns';
import PrimaryBtn from '../../../../components/buttons/PrimaryBtn';
import InputGroup from '../../../../components/InputGroup';
import { inject, observer } from 'mobx-react';
import { CabinetStackParamList } from '../../types';
import UserInfo from '../../../../components/UserInfo';
import Auth from '../../../auth/mobx/Auth';
import Cabinet from '../../mobx/Cabinet';

interface Props {
  navigation: StackNavigationProp<CabinetStackParamList>;
  cabinet: typeof Cabinet;
}

const Home: React.FC<Props> = (props) => {
  const { navigation, cabinet } = props;
  const { currentUser, fetchUserInfo } = cabinet;

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <View style={stylePatterns.container}>
      {Boolean(currentUser) && <UserInfo user={currentUser} />}
      {/* <PrimaryBtn title="Sign in" onPress={signIn} /> */}
      <Text>Home screen</Text>
    </View>
  );
};

export default inject('cabinet')(observer(Home));
