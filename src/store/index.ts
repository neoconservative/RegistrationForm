import {combineReducers, createStore, applyMiddleware} from "redux";
import {loadingReducer} from "./loadingReducer";
import {userReducer} from "./userReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    loading: loadingReducer,
    user: userReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
