import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute} from '../util/route_util';
import { Route } from 'react-router';
import NavbarContainer from "./navbar/navbar_container";
import LoginFormContainer from './session/login_form.container';
import SignupFormContainer from './session/signup_form_container';
import DeckShowContainer from './Deck/deck_show_container';
import SplashPage from './splash/splash_page';
import TeamPage from './main/team_page';
import Main from './main';


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
import "../styles/messages.css";
import "../styles/dictionary_api.css";


const App = () => (
    <div>
        <Route path="/" component={NavbarContainer}/>

        <Switch>
            <ProtectedRoute path="/main" component={Main}/>
            <ProtectedRoute path="/cards" component={Main} />
            <ProtectedRoute exact path="/decks" component={Main} />
            <ProtectedRoute path="/messages" component={Main} />
            <ProtectedRoute path="/owncards" component={Main} />
            <ProtectedRoute path="/dictionary" component={Main}/>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
    
            <Route exact path="/team" component={TeamPage}/>
            <AuthRoute exact path="/" component={SplashPage}/>

            <ProtectedRoute path="/decks/:deckId" component={DeckShowContainer}/>

        </Switch>

    </div>
);

export default App;
;