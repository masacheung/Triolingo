import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthRoute} from '../util/route_util';
import { Route } from 'react-router';
import LoginFormContainer from './session/login_form.container';
import SignupFormContainer from './session/signup_form_container';
import SplashPages from './splash_page';

import "../styles/reset.css";
import "../styles/splash.css";
import "../styles/navbar.css";


const App = () => (
    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={SplashPages}/>
    </Switch>
);

export default App;
