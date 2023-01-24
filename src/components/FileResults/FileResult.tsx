import React from 'react';
import './FileResult.scss';
import {NavLink} from "react-router-dom";
import {iFileResult} from "./types";
const FileResult = ({title}: iFileResult) => {
    const fileData = [
        {
            file: 'text.txt',
            name: 'User 1',
            link: '/user1'
        },
        {
            file: 'file.pdf',
            name: 'User 2',
            link: '/user1'
        },
        {
            file: 'index.html',
            name: 'User 3',
            link: '/user1'
        },
    ]
    return (
        <>
            <h2 className="file-result__title">{title}</h2>
            <table className="file-result-table">
                <thead>
                <tr>
                    <th>File</th>
                    <th>User</th>
                </tr>
                </thead>
                <tbody>
                {fileData.map(item => (
                    <tr key={item.link}>
                        <td>
                            <NavLink to={'/'+ item.file}
                                     className="file-result-table__link"
                            >{item.file}</NavLink>
                        </td>
                        <td>
                            <NavLink to={item.link}
                                     className="file-result-table__link"
                            >{item.name}</NavLink>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

export default FileResult;