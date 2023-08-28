import React, {useState} from 'react';
import Button from '../../atoms/Button/Button';
import './CheckboxModal.scss';
import {createUniqueId} from "../../../utils/createUniqueId";
import {iCheckboxModal, optionItem} from "./types";
const CheckboxModal = ({onAddCheckboxList}: iCheckboxModal) => {
    const [value, setValue] = useState('');
    const [list, setList] = useState<optionItem[]>([]);
    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            const newItem = {
                id: createUniqueId(),
                title: value
            }
            setList(prevState => [...prevState, newItem])
            setValue('')
        }
    }

    const onSubmit = () => {
        onAddCheckboxList(list);
    }

    return (
        <div className="modal-checkbox">
            <div className="modal-checkbox__title">Create the list</div>
            <input placeholder="Add item"
                   value={value}
                   onChange={(e) => setValue(e.target.value)}
                   onKeyDown={onEnter}
            />
            {list.length > 0 ? (
                <ul className="modal-checkbox__list">
                    {list.map(item => (
                        <li key={item.id
                        }>{item.title}</li>
                    ))}
                </ul>
            ) : (
                <p className="modal-checkbox__text">Empty List</p>
            )}
            <Button btnEvent={onSubmit}
                    className="modal-checkbox__button"
            >Create list</Button>
        </div>
    );
};

export default CheckboxModal;