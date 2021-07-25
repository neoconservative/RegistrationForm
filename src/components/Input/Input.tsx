import React from "react";
import styles from "./Input.module.css"

interface Props {
    value?: string
    onChange?: (e) => void
    disabled?: boolean
    className?: string
    classNameGroup?: string
    placeholder?: string
    type?: string
    errorMessage?: string
}

export const Input = (props: Props) => {

    return (
        <div className={props.classNameGroup}>
            <input
                onChange={props.onChange}
                value={props.value}
                disabled={props.disabled}
                className={props.className}
                placeholder={props.placeholder}
                type={props.type}
            />
            {props.errorMessage &&
            <div className={styles.error}>{props.errorMessage}</div>
            }
        </div>
    );
};