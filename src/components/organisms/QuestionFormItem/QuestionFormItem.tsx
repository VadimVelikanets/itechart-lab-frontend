import React, {useState} from 'react';
import {iQuestionFormItem} from "./types";
import './QuestionFormItem.scss';
import Textfield from "../Textfield/Textfield";
import File from "../organisms/File/File";
import Range from "../atoms/Range/Range";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import {useQuestionFormContext} from "../../context/QuestionFormContext";

const QuestionFormItem = ({name, type, options, onDeleteItem, id}: iQuestionFormItem) => {
    const {currentTab, questionForm, setQuestionForm} = useQuestionFormContext();
    const [ratingValue, setRatingValue] = useState<number | null>(0);
    const [isEditMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(name);
    const [prevTitle, setPrevTitle] = useState(name);
    const arr = [...questionForm];
    const pageData = [...questionForm][currentTab - 1];
    const currentIndex = pageData.items.findIndex(i => i.id === id);

    const onDeleteHandler = (id: string) => onDeleteItem(id);
    const onChangeTitle = (e: React.FormEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        pageData.items[currentIndex].name = e.currentTarget.value;
    }

    const onCancelEdit = () => {
        setTitle(prevTitle);
        setEditMode(false);
    }

    const onSaveEdit = () => {
        setPrevTitle(title);
        setEditMode(false);
        arr.splice(currentTab - 1,1, pageData);
        setQuestionForm(arr);
    }

    return (
        <div className="question-item">
            <FormControl className="question-item__wrapper">
                {isEditMode ? (
                    <input
                           className="question-item__edit-input"
                           placeholder={title}
                           value={title}
                           onChange={onChangeTitle}
                    />
                ) : (
                    <div className="question-item__title">{title}</div>
                )}

                {type === 'checkbox' && options?.map(option => (
                        <FormControlLabel key={option.id} control={<Checkbox />} label={option.title} />
                    )
                )}
                {type === 'radio' &&  (
                    <>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            {options?.map(option => (
                                <FormControlLabel key={option.id} value={option.id} control={<Radio />} label={option.title} />
                            ))}
                        </RadioGroup>
                    </>
                )}
                {type === 'text' && (
                    <Textfield/>
                )}
                {type === 'file' && (
                    <File/>
                )}
                {type === 'rating' && (
                    <Rating
                        name="simple-controlled"
                        value={ratingValue}
                        onChange={(event, newValue: number | null) => {
                            setRatingValue(newValue);
                        }}
                    />
                )}
                {type === 'range' && (
                    <Range min={0}
                           max={100}/>
                )}
            </FormControl>
            <div className="question-item__btns">
                {!isEditMode && (
                    <EditIcon className="question-item__edit"
                              onClick={() => setEditMode(true)}
                    />
                )}

                <DeleteIcon className="question-item__delete"
                            onClick={() => onDeleteHandler(id)}
                />
            </div>
            {isEditMode && (
                <div className="question-item__save" draggable>
                    <Button
                        variant="outlined"
                        onClick={onCancelEdit}
                        className="question-item__btn-cancel"
                    >Cancel</Button>
                    <Button
                        onClick={onSaveEdit}
                        variant="contained"
                        className="question-item__btn-save"
                    >Save</Button>
                </div>
            )}
        </div>
    );
};

export default QuestionFormItem;