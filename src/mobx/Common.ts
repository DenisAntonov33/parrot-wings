import { observable, action, computed } from 'mobx';
import auth from '../modules/auth/mobx/Auth';

class Common {
  @observable loading: boolean = false;
  @observable modalName: string = '';

  @computed get appIsReady() {
    return auth.hydrated;
  }

  @action
  setLoading = (value: boolean) => {
    this.loading = value;
  };

  @action
  setModalName = (modalName: string) => {
    this.modalName = modalName;
  };
}

export default new Common();
