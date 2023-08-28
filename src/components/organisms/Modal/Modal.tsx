import React from 'react';
import {iModal} from "./types";
import Portal from '../Portal/Portal';
import Button from "../../atoms/Button/Button";
import CloseIcon from '@mui/icons-material/Close';
import './Modal.scss';
import classNames from "classnames";
const Modal = ({children, onClose, isOpen, className}: iModal) => {
    if(!isOpen) {
        return null;
    }
    return (
        <Portal>
            <div
                 className={classNames("modal", { [className] : className })}
                 onClick={onClose}>
                <Button
                    className="modal-close"
                    btnEvent={onClose}
                >
                    <CloseIcon/>
                </Button>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};

export default Modal;