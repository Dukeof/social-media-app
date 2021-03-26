import { store } from '..';


// const token = store.getState().loginReducer.token;
// const token = localStorage.getItem('token');

export const baseUrl = 'http://localhost:8000/backend/api/';

export const headers = new Headers({
    'Content-Type': 'application/json'
});

const token = localStorage.getItem('token');
export const headersWithToken = new Headers({
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
})