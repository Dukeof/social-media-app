import { useDispatch } from 'react-redux';
import { baseUrl, headersWithToken } from '.';
import { getAllPostsAction } from '../actions';

const dispatch = useDispatch

export const getAllPosts = () => {
  const url = `${baseUrl}social/posts/`;
  const config = {
    headers: headersWithToken,
    method: 'GET',
  };
  fetch(url, config)
    .then((response) => response.json())
    .then((data) => {
      dispatch(getAllPostsAction(data));
      console.log(data);
    });
};
