import { action, observable } from 'mobx';
import { AsyncStorage } from 'react-native';
import { create, persist } from 'mobx-persist';
import { InputField } from '../../../types';
import { signIn, signUp } from '../api';
import { alertMessage } from '../../../constants/utils';
import common from '../../../mobx/Common';

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
});

class Auth {
  @persist @observable token: string = '';
  @observable hydrated: boolean = false;
  @observable signUpForm: InputField[] = [
    { field: 'username', value: '', error: '', label: 'Name' },
    { field: 'email', value: '', error: '', label: 'Email' },
    { field: 'password', value: '', error: '', label: 'Password' },
  ];
  @observable signInForm: InputField[] = [
    { field: 'email', value: '', error: '', label: 'Email' },
    { field: 'password', value: '', error: '', label: 'Password' },
  ];

  @action
  setToken = (value: string) => {
    this.token = value;
  };

  @action
  updateSignUpForm = (value: InputField[]) => {
    this.signUpForm = value;
  };

  @action
  updateSignInForm = (value: InputField[]) => {
    this.signInForm = value;
  };

  @action
  setHydrated = () => {
    this.hydrated = true;
  };

  @action
  signUp = async () => {
    try {
      common.setLoading(true);
      const payload = {
        username: this.signUpForm[0].value,
        email: this.signUpForm[1].value,
        password: this.signUpForm[2].value,
      };
      const res = await signUp(payload);
      this.setToken(res.data.id_token);
    } catch (err) {
      alertMessage(err.response.data, 'Error');
    } finally {
      common.setLoading(false);
    }
  };

  @action
  signIn = async () => {
    try {
      common.setLoading(true);
      const payload = {
        email: this.signInForm[0].value,
        password: this.signInForm[1].value,
      };
      const res = await signIn(payload);
      this.setToken(res.data.id_token);
    } catch (err) {
      alertMessage(err.response.data, 'Error');
    } finally {
      common.setLoading(false);
    }
  };

  @action
  signOut = () => {
    this.token = '';
  };
}

const auth = new Auth();
hydrate('auth', auth).then(() => auth.setHydrated());

export default auth;
