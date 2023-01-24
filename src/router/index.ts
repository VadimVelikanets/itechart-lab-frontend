import React from "react";
import CreatePoll from "../pages/CreatePoll/CreatePoll";
import MyPolls from "../pages/MyPolls/MyPolls";
import Results from "../pages/Results/Results";
interface iRoute {
    path: string,
    element: React.FC<any>,
    exact?: boolean
};

export enum routerNames {
    MAIN = '/',
    MY_POLLS = '/my-polls',
    RESULTS = '/results'
};

export const routes: iRoute[] = [
    {
        path: routerNames.MAIN,
        element: CreatePoll,
        exact: true
    },
    {
        path: routerNames.MY_POLLS,
        element: MyPolls
    },
    {
        path: routerNames.RESULTS,
        element: Results
    },
];