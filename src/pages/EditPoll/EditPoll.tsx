import React from 'react';
import './EditPoll.scss';
import EditForm from "../../components/organisms/EditForm/EditForm";
import {useParams} from "react-router-dom";
import Sidebar from "../../components/molecules/Sidebar/Sidebar";
const EditPoll = () => {
    const {id} = useParams();

    return (
        <>
            <div className="edit-poll">
                <h1>Edit</h1>
                <EditForm id={id}/>
            </div>
            <Sidebar/>
        </>

    );
};

export default EditPoll;