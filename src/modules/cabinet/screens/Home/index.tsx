import React, { useCallback, useEffect, useMemo } from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import stylePatterns from '../../../../constants/stylePatterns';
import { inject, observer } from 'mobx-react';
import { CabinetStackParamList } from '../../types';
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
    transactionAmount,
    setTransactionAmount,
    recipient,
    setRecipient,
  } = cabinet;

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const createTransactionWrapper = useCallback(() => {
    createTransaction({
      name: recipient!.name,
      amount: transactionAmount,
    });
  }, [recipient, transactionAmount]);

  const btnDisabled = useMemo(() => {
    return !recipient || !recipient.name || !transactionAmount;
  }, [!recipient, transactionAmount]);

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
        value={transactionAmount}
        onChangeText={setTransactionAmount}
        keyboardType="numeric"
      />
      <PrimaryBtn
        disabled={btnDisabled}
        title="Commit"
        onPress={createTransactionWrapper}
      />
    </View>
  );
};

export default inject('cabinet')(observer(Home));
