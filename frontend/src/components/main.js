import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import MainPage from "./main/main_page";
import InstructionPage from "./main/instruction_page";
import CardsIndexContainer from "./cards/cards_index_container";
import MainNav from "./mainnavbar/nav_container";
import DecksIndexContainer from "./Deck/decks_index_container";
import DeckShowContainer from "./Deck/deck_show_container";
import MessagesContainer from "./message/messages_container";
import OwnCardsIndexContainer from "./owncards/own_cards_index_container";


const Main = () => {
    return( 
        <div className="main">
            <ProtectedRoute component={MainNav}/>
            <Switch>
                <ProtectedRoute path='/main' component={InstructionPage}/>
                <ProtectedRoute path='/cards' component={CardsIndexContainer} />
                <ProtectedRoute path='/owncards' component={OwnCardsIndexContainer} />
                <ProtectedRoute path="/decks" component={DecksIndexContainer} />
                <ProtectedRoute path="/messages" component={MessagesContainer} />

            </Switch>
        </div>
    )

}

export default Main;
