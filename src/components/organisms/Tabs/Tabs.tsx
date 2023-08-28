import React, {memo, useEffect, useState} from 'react';
import './Tabs.scss';
import classNames from 'classnames';
import QuestionForm from "../QuestionForm/QuestionForm";
import Button from "../../atoms/Button/Button";
import Input from '../../atoms/Input/Input';
import {useQuestionFormContext} from "../../../context/QuestionFormContext";
import {useHistory} from "react-router-dom";
import {createPoll, editPoll} from "../../../api/poll";
import CloseIcon from '@mui/icons-material/Close';
import {useAppSelector} from "../../../hooks/store";
import {iTabs} from './types';

const Tabs = ({savedTitle, isEditMode, id}: iTabs) => {
    const history = useHistory();
    const uId = useAppSelector(state => state.user?.user?.id);
    const {questionForm, currentTab, setCurrentTab, setQuestionForm} = useQuestionFormContext();
    const arr = [...questionForm];
    const [title, setTitle] = useState( '');

    useEffect(() => {
            setTitle(savedTitle);

    }, [savedTitle])

    const onAddPage = () => {
        arr.push({
            id: arr.length + 1,
            items: [],
            title: "Page " + (arr.length + 1)
        })

        setQuestionForm(arr);
    };

    const onAddPoll = () => {
        createPoll(uId, title, questionForm)
        history.push('/my-polls')
    }

    const onSaveEdit = () => {
        editPoll(id, title, questionForm)
        history.push('/my-polls')
    }

    const onDeletePage = (id: number) => {
        const updatedArr = arr.filter(i => i.id !== id);
        const arr2 = updatedArr.map((item, index) => ({
            id: index + 1,
            title: 'Page ' + (index + 1),
            items: item.items
        }))
        setQuestionForm(arr2);
        if(id === currentTab) {
            setCurrentTab(1);
        }
    }

    return (
        <div className="tabs">
            <div className="tabs-header">
                <Input
                    label="Poll title"
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className="tabs-navigation">
                {questionForm.length > 0 && questionForm.map((item,index) => (
                    <div key={item.id}
                         className="tabs-navigation__btn-wrapper"
                    >
                        {questionForm.length > 1 && (
                            <CloseIcon className="tabs-navigation__btn-close"
                                       onClick={()=>onDeletePage(item.id)}
                            />
                        )}
                        <Button
                            className={classNames("tabs-navigation__item", { ["tabs-navigation__item--active"] : currentTab === item.id })}
                            btnEvent={()=>setCurrentTab(item.id)}
                            tabIndex={index}>{item.title}</Button>
                    </div>
                ))}
                <Button
                    className={classNames("tabs-navigation__item")}
                    btnEvent={onAddPage}
                >
                    +
                </Button>
            </div>
            <div className="tabs-content">
                {questionForm.length > 0 && questionForm.map(item => (
                    currentTab === item.id &&
                    <QuestionForm id={item.id}
                                  key={item.title}
                                  title={item.title}
                                  items={questionForm[currentTab - 1]?.items}/>
                ))}
            </div>
            <div className="tabs-footer">
                {isEditMode ? (
                    <Button btnEvent={onSaveEdit}
                            className="poll-btn"
                            disabled={title === ''}
                    >Save Changes</Button>
                ) : (
                    <Button btnEvent={onAddPoll}
                            className="poll-btn"
                            disabled={title === ''}
                    >Create Poll</Button>
                )}
            </div>
        </div>
    );
};

export default memo(Tabs);