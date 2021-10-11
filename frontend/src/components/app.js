import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPage from './splash/splash_page';

const App = () => (
    <Switch>
        <AuthRoute exact path="/" component={SplashPage}/>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
);

export default App;
