import { observable, action } from 'mobx';

class Common {
  @observable loading: boolean = false;
  @observable modalName: string = '';

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
