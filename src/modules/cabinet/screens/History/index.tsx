import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import stylePatterns from '../../../../constants/stylePatterns';
import { inject, observer } from 'mobx-react';
import { CabinetRoutes, CabinetStackParamList, Transaction } from '../../types';
import UserInfo from '../../../../components/UserInfo';
import Cabinet from '../../mobx/Cabinet';
import * as ScreenOrientation from 'expo-screen-orientation';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
  navigation: StackNavigationProp<CabinetStackParamList>;
  cabinet: typeof Cabinet;
}

interface ItemProps {
  item: Transaction;
  canRepeat?: boolean;
  navigation?: StackNavigationProp<CabinetStackParamList>;
}

const Item: React.FC<ItemProps> = ({ item, navigation, canRepeat }) => {
  const repeatTransaction = () => {
    navigation?.navigate(CabinetRoutes.home);
  };
  return (
    <View style={styles.row}>
      <Text style={styles.col1}>{item.date}</Text>
      <Text style={styles.col2}>{item.username}</Text>
      <Text style={styles.col3}> {item.amount}</Text>
      <Text style={styles.col4}> {item.balance}</Text>
      {canRepeat ? (
        <TouchableOpacity style={styles.repeatBtn}>
          <MaterialCommunityIcons name="reload" size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <View style={styles.repeatBtn} />
      )}
    </View>
  );
};

const History: React.FC<Props> = (props) => {
  const { cabinet, navigation } = props;
  const {
    currentUser,
    transactions,
    fetchUserInfo,
    fetchTransactions,
  } = cabinet;

  useEffect(() => {
    fetchUserInfo();
    fetchTransactions();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      ScreenOrientation.unlockAsync();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={stylePatterns.container}>
      {Boolean(currentUser) && <UserInfo user={currentUser!} />}
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <Item item={item} canRepeat navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <Item
            item={{
              id: '',
              date: 'Date, Time',
              username: 'User name',
              amount: 'Amount',
              balance: 'Balance',
            }}
          />
        )}
      />
    </View>
  );
};

export default inject('cabinet')(observer(History));
