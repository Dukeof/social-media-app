import { useDispatch } from "react-redux";
import { baseUrl, headersWithToken } from ".";
import { getAllPostsAction } from "../actions";


const dispatch = useDispatch

export const getUserData = (user = null) => {
  const url = `${baseUrl}users/me/`;
    let body = null;
    if (user) { body = JSON.stringify(user) }
    const config = {
      headers: headersWithToken,
      method: 'GET',
      body: body,    
    };
    fetch(url, config)
      .then((response) => response.json())
      .then((data) => {
        dispatch(getAllPostsAction(data));
        console.log(data);
      });
  };
