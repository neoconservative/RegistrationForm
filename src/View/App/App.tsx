import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect,
} from "react-router-dom";
import {Authentification} from "../Authentification/Authentification";
import {SuccessfulForm} from "../SuccessfulForm/SuccessfulForm";
import {getToken} from "../../helpers/token";

export const App = () => {
    const token = getToken();
    const isAuthentificated = token !== null;

    return (
        <Router>
            <Switch>
                <Route path="/login"
                       render={() => !isAuthentificated ?
                           <Authentification />
                           :
                           <Redirect to="/"/>
                       }/>
                <Route
                    path="/"
                    render={() => isAuthentificated ?
                        <SuccessfulForm /> :
                        <Redirect to="/login"/>
                    }/>
            </Switch>
        </Router>
    );
};