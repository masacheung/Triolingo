import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute} from '../util/route_util';
import { Route } from 'react-router';
import LoginFormContainer from './session/login_form.container';
import SignupFormContainer from './session/signup_form_container';
import SplashPages from './splash_page';
import TeamPage from './main/team_page';
import MainPage from './main/main_page';

import "../styles/reset.css";
import "../styles/splash.css";
import "../styles/navbar.css";


const App = () => (
    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/cards" component={MainPage}/>
        <Route exact path="/team" component={TeamPage}/>
        <Route exact path="/" component={SplashPages}/>
    </Switch>
);

export default App;
