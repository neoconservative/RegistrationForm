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
    // localStorage.removeItem('token');
    const token = getToken();
    const isAuthenticated = token !== null;

    return (
        <Router>
            <Switch>
                <Route path="/login"
                       render={() => !isAuthenticated ?
                           <Authentification />
                           :
                           <Redirect to="/"/>
                       }/>
                <Route
                    path="/"
                    render={() => isAuthenticated ?
                        <SuccessfulForm /> :
                        <Redirect to="/login"/>
                    }/>
            </Switch>
        </Router>
    );
};