import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { UserFull } from '../../modules/cabinet/types';
import styles from './styles';

interface Props {
  user: UserFull;
}

const UserInfo: React.FC<Props> = memo((props) => {
  const { user } = props;
  return (
    <View style={styles.userInfo}>
      <Text>{user.name}</Text>
      <Text>${user.balance}</Text>
    </View>
  );
});

export default UserInfo;
