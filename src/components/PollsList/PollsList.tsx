import React from 'react';
import "./PollsList.scss";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {NavLink} from "react-router-dom";
import {createUniqueId} from "../../utils/createUniqueId";
const PollsList = () => {

    const pollsList = [
        {
            title: "Poll 1",
            edited: "11.12.2020",
            answers: 10,
            link: "/poll",
            results: "/results",
            edit: "/edit"
        },
        {
            title: "Poll 4",
            edited: "21.12.2022",
            answers: 67,
            link: "/poll",
            results: "/results",
            edit: "/edit"
        },
        {
            title: "Poll 56",
            edited: "01.01.2023",
            answers: 15,
            link: "/poll",
            results: "/results",
            edit: "/edit"
        },
    ]
    return (
        <div className="pollslist">
            <table className="pollslist-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Edited</th>
                        <th>Answers</th>
                        <th>Link</th>
                        <th>Results</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pollsList.map(item => (
                        <tr key={createUniqueId()}>
                            <td>{item.title}</td>
                            <td>{item.edited}</td>
                            <td>{item.answers}</td>
                            <td>
                                <NavLink to={item.link}
                                         className="pollslist-table__link"
                                >
                                    Link
                                </NavLink>
                            </td>
                            <td>
                                <NavLink to={item.results}
                                         className="pollslist-table__link"
                                >
                                    Results
                                </NavLink>
                            </td>
                            <td>
                                <EditIcon/>
                                <DeleteOutlineIcon/>
                            </td>
                        </tr>
                    ))}
                    <tr className="pollslist-table__footer">
                        <td colSpan={6}>
                            Total result: {pollsList.length}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PollsList;