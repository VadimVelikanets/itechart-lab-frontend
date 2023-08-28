import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {userRoutes, anonRoutes} from "../../../router";
import {iAppRouter} from "./types";
const AppRouter = ({user}: iAppRouter) => {
    return (<Switch>
        {user ? <>
            {userRoutes.map((item, index) => (
            <Route key={index}
                   path={item.path}
                   exact={item.exact}
                   component={item.element}/>
        ))}
            <Route exact path="/login">
                <Redirect to="/" />
            </Route>
            <Route exact path="/registration">
                <Redirect to="/" />
            </Route>
        </> : <>{anonRoutes.map((item, index) => (
            <Route key={index}
                   path={item.path}
                   exact={item.exact}
                   component={item.element}/>
            ))}
            <Route exact path="/">
                 <Redirect to="/login" />
            </Route>
        </>}
    </Switch>);
};

export default AppRouter;