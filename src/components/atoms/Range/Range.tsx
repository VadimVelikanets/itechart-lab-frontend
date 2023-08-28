import React from 'react';
import {iRange} from "./types";
import './Range.scss';

const Range = ({value, onChange, min, max}: iRange) => {

    return (
        <div className="range" onClick={e => e.stopPropagation()}>
            <span  className="range-value">{value}</span>
            <input className="range-input"
                   type="range"
                   id="points"
                   name="points"
                   min={min} max={max}
                   value={value}
                   onChange={onChange}
            />
            <div className="range-params">
                <span>{min}</span>
                <span>{max}</span>
            </div>
        </div>
    );
};

export default Range;