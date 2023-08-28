import React, {useEffect, useState} from 'react';
import Tabs from '../Tabs/Tabs';
import {iEditForm} from "./types";
import {getPollById} from "../../../api/poll";
import {useQuestionFormContext} from "../../../context/QuestionFormContext";

const EditForm = ({id}: iEditForm) => {
    const {questionForm, setQuestionForm} = useQuestionFormContext();
    const [title, setTitle] = useState('');
    useEffect(() => {
        getPollById(id).then(res => {
            setQuestionForm(res?.pages)
            setTitle(res?.title)
        })
    }, [])
    return (
        <>
           <Tabs isEditMode={true}
                 savedTitle={title}
                 id={id}
           />
        </>
    );
};

export default EditForm;