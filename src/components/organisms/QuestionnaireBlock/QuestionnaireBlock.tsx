import React, {useEffect} from 'react';
import {getPollById} from "../../../api/poll";
import {useQuestionFormContext} from "../../../context/QuestionFormContext";
import Input from "../../atoms/Input/Input";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../../atoms/Button/Button";
import classNames from "classnames";
import QuestionForm from "../QuestionForm/QuestionForm";

const QuestionnaireForm = ({id}) => {
    const {questionForm, setQuestionForm, currentTab, setCurrentTab} = useQuestionFormContext();

    useEffect(() => {
        getPollById(id).then(res => {
            setQuestionForm(res?.pages)
        })
    }, [])
    return (
        <div className="tabs">
            {/*<div className="tabs-header">*/}
            {/*    <Input*/}
            {/*        label="Poll title"*/}
            {/*        type="text"*/}
            {/*        value={title}*/}
            {/*        onChange={e => setTitle(e.target.value)}*/}
            {/*    />*/}
            {/*</div>*/}
            <div className="tabs-navigation">
                {questionForm.length > 0 && questionForm.map((item,index) => (
                    <div key={item.id}
                         className="tabs-navigation__btn-wrapper"
                    >
                        <Button
                            className={classNames("tabs-navigation__item", { ["tabs-navigation__item--active"] : currentTab === item.id })}
                            btnEvent={()=>setCurrentTab(item.id)}
                            tabIndex={index}>{item.title}</Button>
                    </div>
                ))}
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
                    {/*<Button btnEvent={onAddPoll}*/}
                    {/*        className="poll-btn"*/}
                    {/*        disabled={title === ''}*/}
                    {/*>Create Poll</Button>*/}
            </div>
        </div>
    );
};

export default QuestionnaireForm;