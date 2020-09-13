import { action, observable } from 'mobx';
import { alertMessage } from '../../../constants/utils';
import common from '../../../mobx/Common';
import { UserFull } from '../types';
import { getUserInfo } from '../api';

class Cabinet {
  @observable currentUser: UserFull | null = null;

  @action
  setCurrentUser = (value: UserFull) => {
    this.currentUser = value;
  };

  @action
  fetchUserInfo = async () => {
    try {
      common.setLoading(true);
      const res = await getUserInfo();
      this.setCurrentUser(res.data.user_info_token);
    } catch (err) {
      alertMessage(err.response.data, 'Error');
    } finally {
      common.setLoading(false);
    }
  };
}

const cabinet = new Cabinet();
export default cabinet;
