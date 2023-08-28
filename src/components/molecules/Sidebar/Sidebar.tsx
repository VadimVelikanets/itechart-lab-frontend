import React, {useState} from 'react';
import './Sidebar.scss';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import GradeIcon from '@mui/icons-material/Grade';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import {createUniqueId} from "../../../utils/createUniqueId";
import {useQuestionFormContext} from "../../../context/QuestionFormContext";
import {formType} from "../../../types/QuestionForm";
import Modal from '../../organisms/Modal/Modal';
import CheckboxModal from "../../organisms/CheckboxModal/CheckboxModal";
import {optionItem} from "../../organisms/CheckboxModal/types";

const Sidebar = () => {
    const {questionForm, setQuestionForm, currentTab} = useQuestionFormContext();
    const [listType, setListType] = useState<string | null>(null);
    const arr = [...questionForm];
    const pageData = [...questionForm][currentTab - 1];

    const btnData = [
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

    const updateFormData = (newItem) => {
        pageData.items.push(newItem);
        arr.splice(currentTab - 1, 1, pageData);
        setQuestionForm(arr);
    };
    const onAddItem = (type: string) => {
        const id = createUniqueId();
        updateFormData({
            id,
            name: "Title",
            type
        })
    };

    const onAddCheckboxList = (list: optionItem[]) => {
        const id = createUniqueId();
        updateFormData({
            id,
            name: "Title",
            type: listType,
            options: list
        })
        setListType(null);
    }

    return (
        <>
            <div className="sidebar">
                <div className="sidebar-title">Type of question</div>
                <div className="sidebar-item"
                     onClick={() => setListType('radio')}
                >
                    <FormatListBulletedIcon/>
                    <div className="sidebar-item__title">One variant</div>
                </div>
                <div className="sidebar-item"
                     onClick={() => setListType('checkbox')}
                >
                    <FormatListNumberedIcon/>
                    <div className="sidebar-item__title">Few variants</div>
                </div>
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
            <Modal isOpen={!!listType}
                   onClose={() => setListType(null)}
            >
                <CheckboxModal onAddCheckboxList={onAddCheckboxList}/>
            </Modal>
        </>
    );
};

export default Sidebar;