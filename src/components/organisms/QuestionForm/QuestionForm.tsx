import React, {useState} from 'react';
import './QuestionForm.scss';
import {iQuestionForm} from "./types";
import QuestionFormItem from "../QuestionFormItem/QuestionFormItem";
import {useQuestionFormContext} from "../../../context/QuestionFormContext";
import {createUniqueId} from "../../../utils/createUniqueId";
const QuestionForm = ({title, items, id}: iQuestionForm) => {
    const {currentTab, questionForm, setQuestionForm} = useQuestionFormContext();
    const dragItem = React.useRef<any>(null);
    const dragOverItem = React.useRef<any>(null);
    const arr = [...questionForm];
    const pageData = [...questionForm][currentTab - 1];
    const onDeleteItem = (id: string) => {
        const filteredItems = pageData.items.filter(i => i.id != id);
        pageData.items = filteredItems;
        arr.splice(currentTab - 1,1, pageData);
        setQuestionForm(arr);
    };

    const handleSort = () => {
        let _formData = [...items]
        const draggedItemContent = _formData.splice(dragItem.current, 1)[0]
        _formData.splice(dragOverItem.current, 0, draggedItemContent)
        pageData.items = _formData;
        dragItem.current = null
        dragOverItem.current = null
        arr.splice(currentTab - 1,1, pageData);
        setQuestionForm(arr);
    }

    return (
        <div className="question-form">
            <div className="question-form__title">{title}</div>
            {items.map((item, index) => (
                <div draggable
                     onDragStart={(e) => (dragItem.current = index)}
                     onDragEnter={(e) => (dragOverItem.current = index)}
                     onDragOver={(e) => e.preventDefault()}
                     onDragEnd={handleSort}
                     key={createUniqueId()}
                >
                    <QuestionFormItem
                        name={item?.name}
                        type={item?.type}
                        options={item?.options}
                        onDeleteItem={onDeleteItem}
                        id={item?.id}
                    />
                </div>
            ))}
        </div>
    );
};

export default QuestionForm;