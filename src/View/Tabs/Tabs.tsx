import React from "react";
import styles from './Tabs.module.css'
import {AUTHENTIFICATION_SCREENS} from "../../constants/activeScreen";

interface Props {
    activeScreen: number;
    setActiveScreen: (activeScreen: number) => void;
}

export const Tabs = (props: Props) => {
    return (
        <>
            <button
                onClick={()=> props.setActiveScreen(AUTHENTIFICATION_SCREENS.REGISTRATION)}
                className={`${styles.button_sigup} ${props.activeScreen === AUTHENTIFICATION_SCREENS.REGISTRATION ? styles.button_active : ''}`}
            >
                Sing Up
            </button>
            <button
                onClick={()=> props.setActiveScreen(AUTHENTIFICATION_SCREENS.LOGIN)}
                className={`${styles.button_login} ${props.activeScreen === AUTHENTIFICATION_SCREENS.LOGIN ? styles.button_active : ''}`}
            >
                Log In
            </button>
        </>
    );
};