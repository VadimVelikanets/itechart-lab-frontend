import React from 'react';
import {NavLink} from "react-router-dom";
import './TextResult.scss';
import {iTextResult} from "./types";
const TextResult = ({title}: iTextResult) => {

    const textData = [
        {
            value: 'Answer 1',
            name: 'User 1',
            link: '/user1'
        },
        {
            value: 'Answer 1',
            name: 'User 2',
            link: '/user1'
        },
        {
            value: 'Answer 1',
            name: 'User 3',
            link: '/user1'
        },
        {
            value: 'Answer 1',
            name: 'User 5',
            link: '/user1'
        },
    ]
    return (
        <>
            <h2 className="text-result__title">{title}</h2>
            <table className="text-result-table">
                <thead>
                <tr>
                    <th>Value</th>
                    <th>User</th>
                </tr>
                </thead>
                <tbody>
                    {textData.map(item => (
                        <tr key={item.link}>
                            <td>{item.value}</td>
                            <td>
                                <NavLink to={item.link}
                                         className="text-result-table__link"
                                >{item.name}</NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default TextResult;