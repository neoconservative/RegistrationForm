import React from "react";
import styles from './Tabs.module.css'
import {AUTHENTIFICATION_SCREENS} from "../../constants/activeScreen";

interface Props {
    activeScreen: number;
    setActiveScreen: (activeScreen: number) => void;
}

export const Tabs = (props: Props) => {
    return (
        <div className={styles.tabs_wrapper}>
            <button
                onClick={()=> props.setActiveScreen(AUTHENTIFICATION_SCREENS.REGISTRATION)}
                className={`${styles.tab} ${props.activeScreen === AUTHENTIFICATION_SCREENS.REGISTRATION ? styles.active : ''}`}
            >
                Sing Up
            </button>
            <button
                onClick={()=> props.setActiveScreen(AUTHENTIFICATION_SCREENS.LOGIN)}
                className={`${styles.tab} ${props.activeScreen === AUTHENTIFICATION_SCREENS.LOGIN ? styles.active : ''}`}
            >
                Log In
            </button>
        </div>
    );
};