import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import MainPage from "./main/main_page";

const Main = () => {
    return( 
        <div>
            <Switch>
                <ProtectedRoute path='/cards' component={MainPage}/>
            </Switch>
        </div>
    )

}

export default Main;
