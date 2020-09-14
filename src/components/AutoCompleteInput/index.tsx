import React, {
  forwardRef,
  MutableRefObject,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  TextInput,
  View,
  Text,
  ViewStyle,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import colors from '../../constants/colors';
import AppInput from '../AppInput';
import { User } from '../../modules/cabinet/types';
import styles from './styles';

interface Props {
  users: User[];
  selectedItem: User | null;
  onItemSelected: (item: User | null) => void;
  onChangeText: (value: string) => void;
  style?: ViewStyle;
}

const getHeight = (length: number) => {
  const ITEM_HEIGHT = 30;
  const key = String(length);
  switch (key) {
    case '1':
      return ITEM_HEIGHT;
    case '2':
      return ITEM_HEIGHT * 2;
    default:
      return ITEM_HEIGHT * 3;
  }
};

export type Ref = MutableRefObject<TextInput>;

const AutoCompleteInput: React.FC<Props> = forwardRef<Ref, Props>(
  (props, ref) => {
    const { users, selectedItem, onItemSelected, onChangeText } = props;
    const [popupState, setPopupState] = useState(false);
    const [value, setValue] = useState('');

    const blurHandler = useCallback(() => {
      setPopupState(false);
    }, []);

    const focusHandler = useCallback(() => {
      setPopupState(true);
    }, []);

    const changeTextWrapper = useCallback(
      (value) => {
        onChangeText(value);
        setValue(value);
      },
      [onChangeText]
    );

    const onSelectWrapper = (item) => {
      setValue(item.name);
      onItemSelected(item);
      setPopupState(false);
    };

    const renderItem = useCallback(
      ({ item }) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => onSelectWrapper(item)}
          style={styles.itemBtn}
        >
          <Text>{item.name}</Text>
        </TouchableOpacity>
      ),
      [onSelectWrapper]
    );

    useEffect(() => {
      if (selectedItem) {
        setValue(selectedItem.name);
      }
    }, [selectedItem]);

    return (
      <View style={styles.container}>
        <AppInput
          value={value}
          onChangeText={changeTextWrapper}
          ref={ref}
          onFocus={focusHandler}
          onBlur={blurHandler}
        />
        {Boolean(users.length && popupState) && (
          <View
            style={{
              backgroundColor: colors.white,
              position: 'absolute',
              width: '100%',
              height: getHeight(users.length),
              left: 0,
              top: 30,
              zIndex: 5,
            }}
          >
            <FlatList
              keyboardShouldPersistTaps="always"
              data={users}
              renderItem={renderItem}
            />
          </View>
        )}
      </View>
    );
  }
);

export default AutoCompleteInput;
