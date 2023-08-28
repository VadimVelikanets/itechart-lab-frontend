import React, {useState  } from 'react';
import './Textfield.scss';
import classNames from "classnames";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
import {createUniqueId} from "../../utils/createUniqueId";
const Textfield = () => {
    const [isBold, setBold] = useState(false);
    const [isItalic, setItalic] = useState(false);
    const [textDecoration, setTextDecoration] = useState<string | null>(null);

    const btnData = [
        {
            icon:  <FormatBoldIcon/>,
            condition: isBold,
            onClick: ()=> setBold(!isBold)
        },
        {
            icon:  <FormatItalicIcon/>,
            condition: isItalic,
            onClick: ()=> setItalic(!isItalic)
        },
        {
            icon:  <FormatUnderlinedIcon/>,
            condition: textDecoration === 'underline',
            onClick: ()=> {
                if(textDecoration === 'underline'){
                    setTextDecoration(null)
                } else {
                    setTextDecoration('underline')
                }
            }
        },
        {
            icon:  <FormatStrikethroughIcon/>,
            condition: textDecoration === 'line-through',
            onClick: ()=> {
                if(textDecoration === 'line-through'){
                    setTextDecoration(null)
                } else {
                    setTextDecoration('line-through')
                }
            }
        },
    ];

    return (
        <div className="textfield">
            <div className="textfield-btns">
                {btnData.map(item => (
                    <button
                        key={createUniqueId()}
                        className={classNames("textfield-btn",
                            {"textfield-btn--active": item.condition}
                        )}
                        onClick={item.onClick}
                    >
                        {item.icon}
                    </button>
                ))}
            </div>
            <textarea
                className={classNames("textfield-textarea",
                    {"textfield-textarea--bold": isBold,
                    "textfield-textarea--italic": isItalic,
                    "textfield-textarea--underline": textDecoration === 'underline',
                    "textfield-textarea--linethough": textDecoration === 'line-through',
                    })}
            ></textarea>
        </div>
    );
};

export default Textfield;