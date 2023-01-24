import React, {useState, memo} from 'react';
import './Tabs.scss';
import classNames from 'classnames';
import QuestionForm from "../QuestionForm/QuestionForm";
import Button from "../Button/Button";
import {useQuestionFormContext} from "../../context/QuestionFormContext";

const Tabs = () => {
    const {questionForm, currentTab, setCurrentTab} = useQuestionFormContext();
    return (
        <div className="tabs">
            <div className="tabs-navigation">
                {questionForm.length > 0 && questionForm.map((item,index) => (
                    <Button
                        key={item.id}
                        className={classNames("tabs-navigation__item", { ["tabs-navigation__item--active"] : currentTab === item.id })}
                        name={item.title}
                        btnEvent={()=>setCurrentTab(item.id)}
                        tabIndex={index}
                    />
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
        </div>
    );
};

export default memo(Tabs);