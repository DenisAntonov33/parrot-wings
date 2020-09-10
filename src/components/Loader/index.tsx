import React from 'react';
import { ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../constants/colors';

interface Props {
  isLoading: boolean;
}

const Loader: React.FC<Props> = (props) => {
  const { isLoading } = props;
  return (
    <Modal isVisible={isLoading}>
      <ActivityIndicator size="large" color={colors.white} />
    </Modal>
  );
};

export default Loader;
