import React from 'react';
import ReactDOM from 'react-dom';

import { store } from "./store";
import { Provider } from 'react-redux';


import { grommet, Grommet } from 'grommet';
import Routes from './routes';


ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
     <Grommet theme={ grommet }>
            <Routes />
     </Grommet>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
