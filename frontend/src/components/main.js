import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import MainPage from "./main/main_page";
import CardsIndexContainer from "./cards/cards_index_container";

const Main = () => {
    return( 
        <div className="main">
            <ProtectedRoute component={MainNav}/>
            <Switch>
                <ProtectedRoute path='/main' component={MainPage}/>
                <ProtectedRoute path='/cardss' component={CardsIndexContainer} />
            </Switch>
        </div>
    )

}

export default Main;
