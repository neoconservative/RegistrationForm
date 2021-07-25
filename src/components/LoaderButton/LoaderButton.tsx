import * as React from "react";

interface Props {
    className: string
    text: string
}

export const LoaderButton = (props: Props) => {

    return <button type='submit' className={props.className}>{props.text}</button>
};
