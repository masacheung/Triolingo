import React from "react";
import Splash from "./splash/splash_page";
import NavbarContainer from "./navbar/navbar_container";

import { AuthRoute } from "../util/route_util";

const SplashPages = () => (
    <div>
        <AuthRoute exact path="/" component={NavbarContainer}/>
        <AuthRoute exact path="/" component={Splash}/>
    </div>
)

export default SplashPages;