import React, {type ReactNode, useContext, useMemo, useState} from 'react';
import {formType, iQuestionFormData} from "../types/QuestionForm";
interface questionFormProps {
    questionForm: iQuestionFormData[],
    setQuestionForm: React.Dispatch<React.SetStateAction<any[]>>,
    currentTab: number,
    setCurrentTab: React.Dispatch<React.SetStateAction<number>>
}

const questionFormContextDefaultValue: questionFormProps = {
    questionForm: [],
    setQuestionForm: () => {},
    currentTab: 0,
    setCurrentTab: () => {}
};

const QuestionFormContext = React.createContext<questionFormProps>(questionFormContextDefaultValue);

export function useQuestionFormContext(): questionFormProps {
    return useContext(QuestionFormContext)
}

interface QuestionFormProviderProps {
    children: ReactNode
}

const defaultForm = [
    {id: 1,
        title: "Page 1",
        items: [
            {
                id: "1",
                name: "Checkbox",
                type: formType.checkbox,
                options: [
                    {id: 'checkbox1', title: "Answer 1"},
                    {id: 'checkbox2', title: "Answer 2"},
                    {id: 'checkbox3', title: "Answer 3"},
                ]
            },
            {
                id: "2",
                name: "Radio",
                type: formType.radio,
                options: [
                    {id: 'radio1', title: "Answer 1"},
                    {id: 'radio2', title: "Answer 2"},
                    {id: 'radio3', title: "Answer 3"},
                ]
            },
            {
                id: "3",
                name: "Name",
                type: formType.text,
            },
            {
                id: "4",
                name: "File",
                type: formType.file,
            },
            {
                id: "5",
                name: "Rating",
                type: formType.rating,
            },
            {
                id: "6",
                name: "Range",
                type: formType.range,
            },
        ]},
    {id: 2,
        title: "Page 2",
        items: [
            {
                id: "1",
                name: "Checkbox",
                type: formType.checkbox,
                options: [
                    {id: 'checkbox1', title: "Answer 1"},
                    {id: 'checkbox2', title: "Answer 2"},
                    {id: 'checkbox3', title: "Answer 3"},
                ]
            },
            {
                id: "2",
                name: "Radio",
                type: formType.radio,
                options: [
                    {id: 'radio1', title: "Answer 1"},
                    {id: 'radio2', title: "Answer 2"},
                    {id: 'radio3', title: "Answer 3"},
                ]
            },
            {
                id: "3",
                name: "Name",
                type: formType.text,
            },
            {
                id: "4",
                name: "File",
                type: formType.file,
            },
            {
                id: "5",
                name: "Rating",
                type: formType.rating,
            },
            {
                id: "6",
                name: "Range",
                type: formType.range,
            },
        ]},
    {id: 3,
        title: "Page 3",
        items: [
            {
                id: "1",
                name: "Checkbox",
                type: formType.checkbox,
                options: [
                    {id: 'checkbox1', title: "Answer 1"},
                    {id: 'checkbox2', title: "Answer 2"},
                    {id: 'checkbox3', title: "Answer 3"},
                ]
            },
            {
                id: "2",
                name: "Radio",
                type: formType.radio,
                options: [
                    {id: 'radio1', title: "Answer 1"},
                    {id: 'radio2', title: "Answer 2"},
                    {id: 'radio3', title: "Answer 3"},
                ]
            },
            {
                id: "3",
                name: "Name",
                type: formType.text,
            },
            {
                id: "4",
                name: "File",
                type: formType.file,
            },
            {
                id: "5",
                name: "Rating",
                type: formType.rating,
            },
            {
                id: "6",
                name: "Range",
                type: formType.range,
            },
        ]},
];
export const QuestionFormProvider = ({children}: QuestionFormProviderProps) => {

    const [questionForm, setQuestionForm] = useState<iQuestionFormData[]>(defaultForm);
    const [currentTab, setCurrentTab] = useState(1);
    const memoQuestionFormContextValue = useMemo(()=> {
        return {
            questionForm, setQuestionForm, currentTab, setCurrentTab
        }
    }, [questionForm, setQuestionForm, currentTab, setCurrentTab]);

    return (
        <QuestionFormContext.Provider value={memoQuestionFormContextValue}>
            {children}
        </QuestionFormContext.Provider>
    )
}