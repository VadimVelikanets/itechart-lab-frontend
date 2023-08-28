import React from 'react';
import {useParams} from "react-router-dom";
import QuestionnaireBlock from "../../components/organisms/QuestionnaireBlock/QuestionnaireBlock";
const Questionnaire = () => {
    const {id} = useParams();
    return (
        <>
            <QuestionnaireBlock id={id}/>
        </>
    );
};

export default Questionnaire;