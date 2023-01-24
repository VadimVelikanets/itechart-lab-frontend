import React from 'react';
import './Results.scss';
import ResultsCommon from "../../components/ResultsCommon/ResultsCommon";
const Results = () => {
    return (
        <div className="results-page">
            <h1 className="title">Results</h1>
            <ResultsCommon/>
        </div>
    );
};

export default Results;