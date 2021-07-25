import React from "react";
import styles from './ButtonBlock.module.css'

export const ButtonBlock = (props) => {
    const activeButtonSigup = props.isSignUpView ? styles.button_active : '';
    const activeButtonLogin = props.isSignUpView ? '' : styles.button_active;

    return (
        <div className={styles.buttons_section}>
            <button onClick={()=> props.setIsSignUpView(true)} className={`${styles.button_sigup} ${activeButtonSigup}`}>Sing Up</button>
            <button onClick={()=> props.setIsSignUpView(false)} className={`${styles.button_login} ${activeButtonLogin}`}>Log In</button>
        </div>
    );
};