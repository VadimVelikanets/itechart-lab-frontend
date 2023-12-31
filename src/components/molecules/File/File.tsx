import React, {useState} from 'react';
import './File.scss';
import DragDropFiles from "../../atoms/DragDropFiles/DragDropFiles";
import Button from '@mui/material/Button';
import { iFileProps } from './types';

const File = ({getFileData}: iFileProps) => {
    const [fileName, setFileName] = useState<string | null>(null);
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.[0]?.name) {
            setFileName(e.target.files?.[0]?.name)
            getFileData(e.target.files?.[0]?.name);
        }
    }

    const onDropFile = (fileName: string) => {
        setFileName(fileName)
        getFileData(fileName);
    }

    return (
        <div>
            <DragDropFiles onDropFile={onDropFile}/>
            <div className="file">
                <input className="file__input"
                       onChange={e => onHandleChange(e)}
                       type="file"/>
                <Button className="file__btn"
                        variant="contained"
                        size="medium">
                    +Add File
                </Button>
            </div>
            {fileName && (
                <div className="file-name">{fileName}</div>
            )}
        </div>
    );
};

export default File;