import React from "react";
import CreatePoll from "../pages/CreatePoll/CreatePoll";
import MyPolls from "../pages/MyPolls/MyPolls";
import Results from "../pages/Results/Results";
import Registration from "../pages/Registation/Registration";
import Login from "../pages/Login/Login";
import EditPoll from "../pages/EditPoll/EditPoll";
import Questionnaire from "../pages/Questionnaire/Questionnaire";
interface iRoute {
    path: string,
    element: React.FC<any>,
    exact?: boolean
};

export enum routerNames {
    REGISTRATION = '/registration',
    LOGIN = '/login',
    MAIN = '/',
    MY_POLLS = '/my-polls',
    RESULTS = '/results',
    EDIT_POLL = '/edit-poll/:id',
    QUESTIONNAIRE = '/questionnaire/:id',
};

export const userRoutes: iRoute[] = [
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
    {
        path: routerNames.EDIT_POLL,
        element: EditPoll
    },
    {
        path: routerNames.QUESTIONNAIRE,
        element: Questionnaire
    },
];

export const anonRoutes: iRoute[] = [
    {
        path: routerNames.REGISTRATION,
        element: Registration,
        exact: true
    },
    {
        path: routerNames.LOGIN,
        element: Login
    },
];