import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute} from '../util/route_util';
import { Route } from 'react-router';
import NavbarContainer from "./navbar/navbar_container";
import LoginFormContainer from './session/login_form.container';
import SignupFormContainer from './session/signup_form_container';
import SplashPage from './splash/splash_page';
import TeamPage from './main/team_page';
import MainPage from './main/main_page';

import "../styles/reset.css";
import "../styles/splash.css";
import "../styles/navbar.css";
import "../styles/team.css";
import "../styles/session.css";
import "../styles/mainpage.css"
import "../styles/character_filterbox.css"


const App = () => (
    <div>
        <Route path="/" component={NavbarContainer}/>

        <Switch>
            <ProtectedRoute path="/cards" component={MainPage}/>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />

            <Route exact path="/team" component={TeamPage}/>
            <Route exact path="/" component={SplashPage}/>
        </Switch>

    </div>
);

export default App;
