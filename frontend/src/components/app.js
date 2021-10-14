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

import DictionaryApi from './dictionary_api/dictionary_api'

import "../styles/reset.css";
import "../styles/splash.css";
import "../styles/navbar.css";
import "../styles/team.css";
import "../styles/session.css";
import "../styles/mainpage.css"
import "../styles/character_filterbox.css";
import "../styles/mainnav.css";
import "../styles/main.css";
import "../styles/cards.css";
import "../styles/modal.css";
import "../styles/decks.css";
import "../styles/messages.css"


const App = () => (
    <div>
        <Route path="/" component={NavbarContainer}/>

        <Switch>
            <ProtectedRoute path="/main" component={Main}/>
            <ProtectedRoute path="/cards" component={Main} />
            <ProtectedRoute path="/decks" component={Main} />
            <ProtectedRoute path="/messages" component={Main} />
            <ProtectedRoute path="/deckshow" component={Main} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
    
            <Route exact path="/team" component={TeamPage}/>
            <AuthRoute exact path="/" component={SplashPage}/>

            {/* for testing api calls */}
            <Route exact path="/apitesting" component={DictionaryApi}/>
        </Switch>

    </div>
);

export default App;
;