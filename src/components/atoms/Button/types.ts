import React from "react";
export interface iButton {
    disabled?: boolean,
    children: string | JSX.Element,
    btnEvent: () => void,
    className?: string,
    tabIndex?: number
}