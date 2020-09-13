import * as React from 'react';
import Router from './Router';
import { View, StyleSheet } from 'react-native';
import Loader from '../components/Loader';
import { StackNavigationProp } from '@react-navigation/stack';
import { inject, observer } from 'mobx-react';
import Common from '../mobx/Common';

interface Props {
  navigation?: StackNavigationProp<any>;
  common?: typeof Common;
}

const NavigationContainer: React.FC<Props> = (props) => {
  const { loading } = props.common!;
  return (
    <View style={styles.container}>
      <Loader isLoading={loading} />
      <Router />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});

export default inject('common')(observer(NavigationContainer));
