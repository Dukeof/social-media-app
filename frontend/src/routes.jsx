import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Redirect } from 'react-router-dom';
// ==================== store ====================
import { store } from './store';
import { logInOrOutReducer } from './store/reducers/logInOrOutReducer';
// ==================== pages ====================
import LogInPage from './pages/logInPage';
import SignUpPage from './pages/signUpPage';
import SignUpPageCongrats from './pages/signUpPageCongrats';
import SignUpPageRegister from './pages/signUpPageRegister';


// ===============================================

const token = localStorage.getItem('token');
if (token) {
    store.dispatch(logInOrOutReducer(token))

}

const Routes = () => {
    return <>
        <Router>
            <Switch>
                <Route exact path='/' component={LogInPage} />
                <Route exact path='/signup' component={SignUpPage} />
                <Route exact path='/signup/congrats' component={SignUpPageCongrats} />
                <Route exact path='/signup/register' component={SignUpPageRegister} />
                {/* <Route exact path='/feed' component={FeedPage} /> */}
                {/* <Route exact path='/profile' component={ProfilePage} /> */}
                {/* <Route exact path='/editProfile' component={EditProfilePage} /> */}
                {/* <Route render={() => <Redirect to={{pathname: '/'}} />} /> */}

            </Switch>
        </Router>
    </>

};

export default Routes;