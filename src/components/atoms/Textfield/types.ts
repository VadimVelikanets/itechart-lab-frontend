import React from "react";

export interface iTextfieldProps {
    value: string,
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>,
    className?: string
}