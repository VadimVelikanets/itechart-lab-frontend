import React, {useState} from 'react';
import {iRange} from "./types";
import './Range.scss';

const Range = ({min, max}: iRange) => {
    const [range, setRange] = useState<string | number>(0);

    const onChangeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRange(e.target.value)
    }

    return (
        <div className="range">
            <span  className="range-value">{range}</span>
            <input className="range-input"
                   type="range"
                   id="points"
                   name="points"
                   min={min} max={max}
                   value={range}
                   onChange={onChangeRange}
            />
            <div className="range-params">
                <span>{min}</span>
                <span>{max}</span>
            </div>
        </div>
    );
};

export default Range;