import React, {useEffect, useState} from 'react';
import {getPollById} from "../../../api/poll";
import {useQuestionFormContext} from "../../../context/QuestionFormContext";
import Button from "../../atoms/Button/Button";
import Loader from '../../atoms/Loader/Loader';
import classNames from "classnames";
import './QuestionnaireBlock.scss';
import QuestionnaireForm from "../QuestionnaireForm/QuestionnaireForm";
import { useAppSelector } from '../../../hooks/store';
import { submitResult, checkUserResult } from '../../../api/result';
import ResultText from '../../atoms/ResultText/ResultText';

const QuestionnaireBlock = ({id}) => {
    const uId = useAppSelector(state => state.user.user.id);
    const {questionForm, setQuestionForm, currentTab, setCurrentTab} = useQuestionFormContext();
    const [result, setResult] = useState({});
    const [isSubmited, setSubmited] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [title, setTitle] = useState('');

    useEffect(() => {
        checkUserResult(id, uId).then(check => {
            if(check) {
                setSubmited(true)
            } else {
                    getPollById(id).then(res => {
                    setQuestionForm(res?.pages)
                    setTitle(res?.title);
                    setResult({
                        uId: uId,
                        pId: id,
                        title: res?.title,
                        pages: res?.pages.map(i => ({id: i.id, title: i.title, items: []}))
                    })})
            }
            setLoading(false);
        })
    }, [id])

    const onSubmitResult = () => {
            submitResult(result)
            setSubmited(true);
    }

    const updateResultPages = (id, items) => {
        const pages = [...result?.pages]
        const index = pages.findIndex(item => item?.id === id);
        pages.splice(index, 1, {...pages[index], items: items})
        setResult({...result, pages});
    }

    if(isLoading) return <Loader/>
    if(isSubmited) return <ResultText/>
    
    return (
        <div className="questionnaire">
            <h1 className="questionnaire-title">{title}</h1>
            <div className="questionnaire-navigation">
                {questionForm.length > 0 && questionForm.map((item,index) => (
                    <div key={item.id}
                         className="questionnaire-navigation__btn-wrapper"
                    >
                        <Button
                            className={classNames("tabs-navigation__item", { ["tabs-navigation__item--active"] : currentTab === item.id })}
                            btnEvent={()=>setCurrentTab(item.id)}
                            tabIndex={index}>{item.title}</Button>
                    </div>
                ))}
            </div>
            <div className="questionnaire-content">
                {questionForm.length > 0 && questionForm.map(item => (
                    <QuestionnaireForm fId={item.id}
                                  isActive={currentTab === item.id}  
                                  key={item.title}
                                  title={item.title}
                                  items={questionForm[currentTab - 1]?.items}
                                  onSubmitResult={onSubmitResult}
                                  updateResultPages={updateResultPages}
                    />
                ))}
            </div>
            <div className="questionnaire-footer">
                    <Button btnEvent={onSubmitResult}
                            className="poll-btn"
                    >Submit Result</Button>
            </div>
        </div>
    );
};

export default QuestionnaireBlock;