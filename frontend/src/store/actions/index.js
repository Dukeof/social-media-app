import { store } from '../';
import * as Constants from '../constants';

export const logInAction = (payload) => {
  store.dispatch({
    type: Constants.LOGIN,
    payload
  });
}

export const logOutAction = () => {
  store.dispatch({
    type: Constants.LOGOUT,
  });
}

export const userDataAction = (data) => {
  store.dispatch({
    type: Constants.GETUSERDATA,
    payload: data,
  });
};

export const getAllPostsAction = (data) => {
  store.dispatch({
    type: Constants.GETALLPOSTS,
    payload: data,
  });
};

export const deletePostAction = (id) => {
  return {
    type: Constants.DELETEPOST,
    payload: id,
  };
};

export const filterLikedAction = () => {
  return {
    type: Constants.FILTERLIKED,
  };
};

export const PostContentAction = (content, id) => {
  store.dispatch({
    type: Constants.ADDPOST,
    payload: {
      id: id,
      content: content,
    }
  });
};

