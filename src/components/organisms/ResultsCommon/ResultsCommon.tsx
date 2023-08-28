import React from 'react';
import BarItem from "../../molecules/BarItem/BarItem";
import './ResultsCommon.scss';
import TextResult from "../../molecules/TextResult/TextResult";
import FileResult from "../../molecules/FileResults/FileResult";
const ResultsCommon = () => {
    return (
        <div className="results-common">
            <BarItem
                title="1. Question with few variants"
            />
            <BarItem
                title="2. Question with one variant"
            />
            <TextResult
                title="3. Text questins results"
            />
            <FileResult title="4. File question results"
            />
            <BarItem
                title="5. Rating"
            />
        </div>
    );
};

export default ResultsCommon;