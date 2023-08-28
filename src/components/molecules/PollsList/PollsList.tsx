import React, {useEffect, useState} from 'react';
import "./PollsList.scss";
import Loader from '../../atoms/Loader/Loader';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {NavLink} from "react-router-dom";
import {createUniqueId} from "../../../utils/createUniqueId";
import {useAppSelector} from "../../../hooks/store";
import {getPollsByUser, deletePollById} from "../../../api/poll";
import {dateFormat} from "../../../utils/dateFormat";
import {countResultsByPoll} from "../../../api/result";

const PollsList = () => {
    const uId = useAppSelector(state => state.user?.user?.id);
    const [pollsList, setPollsList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        getPollsByUser(uId).then(data => {
            setPollsList(data)
            setLoading(false);
        })
    }, [isLoading])

    if (isLoading) return <Loader/>

    const onDeleteItem = (id: string) => {
        deletePollById(id)
        const filtredArr = pollsList.filter(i => i._id !== id)
        setPollsList(filtredArr)
    }

    const getAnswersCount = async (pId) => {
        const value = await countResultsByPoll(pId);
        console.log(value);
    }
    getAnswersCount('63d91c15077c26deb050d156')
    
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
                            <td>{item?.title}</td>
                            <td>{dateFormat(item?.updated_at)}</td>
                            <td>0</td>
                            <td>
                                <NavLink to={`/questionnaire/${item?._id}`}
                                         className="pollslist-table__link"
                                >
                                    Link
                                </NavLink>
                            </td>
                            <td>
                                <NavLink to={'/results'}
                                         className="pollslist-table__link"
                                >
                                    Results
                                </NavLink>
                            </td>
                            <td>
                                <NavLink to={`/edit-poll/${item?._id}`}>
                                    <EditIcon/>
                                </NavLink>

                                <DeleteOutlineIcon
                                    onClick={() => onDeleteItem(item?._id)}
                                />
                            </td>
                        </tr>
                    ))}
                    <tr className="pollslist-table__footer">
                        <td colSpan={6}>
                            Total result: {pollsList?.length} 
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PollsList;