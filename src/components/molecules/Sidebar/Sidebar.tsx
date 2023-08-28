import React from 'react';
import './Sidebar.scss';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import GradeIcon from '@mui/icons-material/Grade';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import {createUniqueId} from "../../utils/createUniqueId";
import {useQuestionFormContext} from "../../context/QuestionFormContext";
import {formType} from "../../types/QuestionForm";

const Sidebar = () => {
    const {questionForm, setQuestionForm, currentTab} = useQuestionFormContext();

    const btnData = [
        {
            type: formType.radio,
            title: "One variant",
            icon: <FormatListBulletedIcon/>
        },
        {
            type: formType.checkbox,
            title: "Few variants",
            icon: <FormatListNumberedIcon/>
        },
        {
            type: formType.text,
            title: "Text",
            icon: <FormatColorTextIcon/>
        },
        {
            type: formType.file,
            title: "File",
            icon: <AttachFileIcon/>
        },
        {
            type: formType.rating,
            title: "Rating",
            icon: <GradeIcon/>
        },
        {
            type: formType.range,
            title: "Range",
            icon: <LinearScaleIcon/>
        },
    ];

    const onAddItem = (type: string) => {
        const id = createUniqueId();
        const newItem = {
            id,
            name: "Title",
            type
        }

        const arr = [...questionForm];
        const pageData = [...questionForm][currentTab - 1];
        pageData.items.push(newItem);
        arr.splice(currentTab - 1,1, pageData);
        setQuestionForm(arr);
    }

    return (
        <div className="sidebar">
            <div className="sidebar-title">Type of question</div>
            {btnData.map(item => (
                <div className="sidebar-item"
                     key={item.type}
                     onClick={() => onAddItem(item.type)}
                >
                    {item.icon}
                    <div className="sidebar-item__title">{item.title}</div>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;