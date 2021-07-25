import React, {useState} from "react";
import {Login} from "../Login/Login";
import styles from './Authentification.module.css'
import {Registration} from "../Registration/Registration";
import {useDispatch, useSelector} from "react-redux";

export const Authentification = () => {
    const [isSignUpView, setIsSignUpView] = useState(false);
    const isLoading = useSelector(state => state.loading.isLoading);
    const dispatch = useDispatch()
    function renderView() {
        if (isSignUpView) {
            return (
                <Registration dispatch={dispatch} isSignUpView={isSignUpView} isLoading={isLoading} setIsSignUpView={setIsSignUpView}/>
            )} else {
            return (
                <Login isSignUpView={isSignUpView} isLoading={isLoading} setIsSignUpView={setIsSignUpView}/>
            )
        }
    }
    return (
        <div className={styles.main}>
            <div className={styles.main_block}>
                {renderView()}
            </div>
        </div>
    );
};