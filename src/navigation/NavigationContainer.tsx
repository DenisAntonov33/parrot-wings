import * as React from 'react';
import Router from './Router';
import { View, StyleSheet } from 'react-native';
import Loader from '../components/Loader';

interface Props {
}

const NavigationContainer: React.FC<Props> = (props) => {

  return (
    <View style={styles.container}>
      <Loader isLoading={false} />
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

export default NavigationContainer;
