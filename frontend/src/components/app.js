import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute} from '../util/route_util';
import { Route } from 'react-router';
import NavbarContainer from "./navbar/navbar_container";
import LoginFormContainer from './session/login_form.container';
import SignupFormContainer from './session/signup_form_container';
import SplashPage from './splash/splash_page';
import TeamPage from './main/team_page';
import Main from './main';
import MainNav from './mainnavbar/nav_container';

import "../styles/reset.css";
import "../styles/splash.css";
import "../styles/navbar.css";
import "../styles/team.css";
import "../styles/session.css";
import "../styles/mainpage.css"
import "../styles/character_filterbox.css";
import "../styles/mainnav.css";


const App = () => (
    <div>
        <Route path="/" component={NavbarContainer}/>

        <Switch>
            <ProtectedRoute path="/mainnav" component={MainNav}/>
            <ProtectedRoute path="/cards" component={Main}/>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />

            <Route exact path="/team" component={TeamPage}/>
            <Route exact path="/" component={SplashPage}/>
        </Switch>

    </div>
);

export default App;
;