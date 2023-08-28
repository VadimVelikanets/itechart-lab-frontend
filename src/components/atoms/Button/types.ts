import React from "react";
export interface iButton {
    disabled?: boolean,
    name: string,
    btnEvent: () => void,
    className?: string,
    tabIndex?: number
}