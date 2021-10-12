import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import MainPage from "./main/main_page";
import MainNav from './mainnavbar/nav_container';
import InstructionPage from './main/instruction_page';


const Main = () => {
    return( 
        <div className="main">
            <ProtectedRoute component={MainNav}/>
            <Switch>
                <ProtectedRoute path='/main' component={InstructionPage}/>
            </Switch>
        </div>
    )

}

export default Main;
