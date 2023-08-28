import React, {useState} from 'react';
import './File.scss';
import DragDropFiles from "../../atoms/DragDropFiles/DragDropFiles";
import Button from '@mui/material/Button';
const File = () => {
    const [fileName, setFileName] = useState<string | null>(null);
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files?.[0]?.name)
        if(e.target.files?.[0]?.name) {
            setFileName(e.target.files?.[0]?.name)
        }
    }

    const onDropFile = (fileName: string) => {
        setFileName(fileName)
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