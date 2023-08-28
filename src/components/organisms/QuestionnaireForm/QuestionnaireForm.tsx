import React, {useState, useEffect} from 'react';
import classNames from "classnames";
import {iQuestionnaireForm} from "./types";
import {createUniqueId} from "../../../utils/createUniqueId";
import Textfield from "../../atoms/Textfield/Textfield";
import File from "../../molecules/File/File";
import Range from "../../atoms/Range/Range";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import './QuestionnaireForm.scss';


const QuestionnaireForm = ({fId, title, items, isActive, updateResultPages}: iQuestionnaireForm) => {
    const [checkboxValue, setCheckboxValue] = useState('');
    const [radioValue, setRadioValue] = useState('');
    const [resultData, setResultData] = useState([]);
    const [ratingValue, setRatingValue] = useState<number | null>(0);
    const [rangeValue, setRange] = useState(0);
    const [text, setText] = useState('');

    useEffect((()=> {
        setResultData(items.map(item => ({id: item.id, name: item.name})))
    }), [items])

    const updateResult = (value, id) => {
        const index = resultData.findIndex(item => item?.id === id);
        resultData.splice(index, 1, {...resultData[index], value: value});
        console.log(resultData)
        updateResultPages(fId, resultData)
    }

    const onChangeCheckboxValue = (value, id) => {
        setCheckboxValue(value)
        updateResult(value, id)
    };

    const onChangeRadioValue = (value: string, id: string) => {
        setRadioValue(value)
        updateResult(value, id)

    };

    const onChangeRating = (value: number | null, id: string) => {
        setRatingValue(value);
        updateResult(value, id)
    };

    const onChangeRange = (value: number | null, id: string) => {
        setRange(value);
        updateResult(value, id)
    };

    const onChangeFile = (file: string, id: string) => {
        updateResult(file, id)
    }

    const onChangeTextField = (value: string, id: string) => {
        setText(value);
        updateResult(value, id)
    }
    return (
        <div className={classNames("questionnaire-form", {["questionnaire-form--active"] : isActive })}>
            <div className="questionnaire-form__title">{title}</div>
            {items.map((item) => (
                <div className="questionnaire-item" key={item.id}>
                    <FormControl className="questionnaire-item__wrapper">
                    <div className="questionnaire-item__title">{item?.name}</div>
                       {item?.type === 'checkbox' && item?.options?.map(option => (
                        <FormControlLabel key={option.id} 
                                            control={<Checkbox onChange={(e) => onChangeCheckboxValue(e?.target.value, item.id)} 
                                                        value={option.title} 
                                                        checked={checkboxValue === option.id}/>} 
                                            label={option.title}
                        />))} 
                        {item?.type === 'radio' && (
                            <>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name={`radio-buttons-group-${createUniqueId()}`}
                                    onChange={(e) => onChangeRadioValue(e?.target.value, item?.id)}
                                >
                                    {item?.options?.map(option => (
                                        <FormControlLabel key={option.id}
                                                        value={option.title}
                                                        control={<Radio checked={radioValue === option.title}/>}
                                                        label={option.title}
                                        />
                                    ))}
                                </RadioGroup>
                            </>
                        )}
                        {item?.type === 'text' && (
                            <Textfield
                                value={text}
                                onChange={(e) => onChangeTextField(e?.target.value, item.id)}
                            />
                        )}
                        {item?.type === 'file' && (
                            <File getFileData={(file) => onChangeFile(file, item.id)}/>
                        )}
                        {item?.type === 'rating' && (
                            <Rating
                                name="simple-controlled"
                                value={ratingValue}
                                onChange={e => onChangeRating(e.target.value, item.id)}
                            />
                        )}
                        {item?.type === 'range' && (
                            <Range min={0}
                                max={100}
                                value={rangeValue}
                                onChange={e => onChangeRange(e?.target.value, item.id)}
                            />
                        )}
                    </FormControl>
                </div>
                
            ))}
        </div>
    );
};

export default QuestionnaireForm;