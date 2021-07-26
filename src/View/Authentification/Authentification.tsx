import React, {useState} from "react";
import {Login} from "../Login/Login";
import styles from './Authentification.module.css'
import {Registration} from "../Registration/Registration";
import {useDispatch, useSelector} from "react-redux";
import {AUTHENTIFICATION_SCREENS} from "../../constants/activeScreen";
import {Tabs} from "../Tabs/Tabs";
import commonStyles from "../../common/commonStyle.module.css";

export const Authentification = () => {
    const [activeScreen, setActiveScreen] = useState(AUTHENTIFICATION_SCREENS.LOGIN);
    const isLoading = useSelector(state => state.loading.isLoading);
    const dispatch = useDispatch();

    function renderView() {
        if (activeScreen === AUTHENTIFICATION_SCREENS.REGISTRATION) {
            return <Registration dispatch={dispatch} isLoading={isLoading}/>
            } else {
            return <Login isLoading={isLoading}/>
        }
    }

    return (
        <div className={commonStyles.main}>
            <div className={commonStyles.main_block}>
                    <Tabs activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>
                {renderView()}
            </div>
        </div>
    );
};