import React, {useState} from 'react';
import './DragDropFiles.scss';
import classNames from "classnames";
import {iDragDropFiles} from "./types";

const DragDropFiles = ({onDropFile}: iDragDropFiles) => {
    const [drag, setDrag] = useState(false);
    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(true);
    }
    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(false);
    }
    const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const dropFiles = e.dataTransfer.files;
        setDrag(false);
        onDropFile(dropFiles[0]?.name);
    }

    return (
        <div
            onDragStart={e => dragStartHandler(e)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDragOver={e => dragStartHandler(e)}
            onDrop={e => onDropHandler(e)}
            className={classNames("drag-n-drop", { ["drag-n-drop--active"] : drag })}
        >
            <span>Drag Files</span>
        </div>
    );
};

export default DragDropFiles;