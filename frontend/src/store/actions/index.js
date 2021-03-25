import { store } from '../';
import * as Constants from '../constants';

export const logInAction = (payload) => {
  store.dispatch({
    type: Constants.LOGIN,
    payload
  });
}
