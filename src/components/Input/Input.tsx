import React from "react";

interface Props {
    value?: string
    onChange?: (e) => void
    disabled?: boolean
    className?: string
    placeholder?: string
    type?: string
}

export const Input = (props: Props) => {
    return (
        <input
            onChange={props.onChange}
            value={props.value}
            disabled={props.disabled}
            className={props.className}
            placeholder={props.placeholder}
            type={props.type}
        />
    );
};