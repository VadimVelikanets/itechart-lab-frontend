import React from 'react';
import PollsList from "../../components/PollsList/PollsList";
const MyPolls = () => {
    return (
        <div className="mypolls-page">
            <h1 className="title">My Polls</h1>
            <PollsList/>
        </div>
    );
};

export default MyPolls;