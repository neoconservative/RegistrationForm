import * as React from "react";
import Loader from "react-spinners/FadeLoader";
import styles from './LoaderButton.module.css';

interface Props {
    className: string
    text: string
    color: string
    isLoading: boolean
}

export const LoaderButton = (props: Props) => {
    if(props.isLoading) {
        return (
            <div className={styles.loader}>
                <Loader color={props.color}/>
            </div>
        )
    }

    return <button type='submit' className={props.className}>{props.text}</button>
};