import React, { useEffect, useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import stylePatterns from '../../../../constants/stylePatterns';
import { inject, observer } from 'mobx-react';
import { CabinetStackParamList, User } from '../../types';
import UserInfo from '../../../../components/UserInfo';
import Cabinet from '../../mobx/Cabinet';
import AutoCompleteInput from '../../../../components/AutoCompleteInput';
import AppInput from '../../../../components/AppInput';
import PrimaryBtn from '../../../../components/buttons/PrimaryBtn';

interface Props {
  navigation: StackNavigationProp<CabinetStackParamList>;
  cabinet: typeof Cabinet;
}

const Home: React.FC<Props> = (props) => {
  const { cabinet } = props;
  const {
    currentUser,
    fetchUserInfo,
    fetchUserList,
    userList,
    createTransaction,
  } = cabinet;
  const [recipient, setRecipient] = useState<User | null>(null);
  const [amount, setAmount] = useState('');

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const btnDisabled = useMemo(() => {
    return !recipient || !recipient.name || !amount;
  }, [!recipient, amount]);

  return (
    <View style={stylePatterns.container}>
      {Boolean(currentUser) && <UserInfo user={currentUser!} />}
      <AutoCompleteInput
        users={userList}
        selectedItem={recipient}
        onChangeText={fetchUserList}
        onItemSelected={setRecipient}
      />
      <AppInput
        value={amount}
        onChangeText={setAmount}
        keyboardType="number-pad"
      />
      <PrimaryBtn
        disabled={btnDisabled}
        title="Commit"
        onPress={() => createTransaction({ name: recipient!.name, amount })}
      />
      <Text>Home screen</Text>
    </View>
  );
};

export default inject('cabinet')(observer(Home));
