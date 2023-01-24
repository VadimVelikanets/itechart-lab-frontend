import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {routes} from "../../router";
const AppRouter = () => {
    return (<Switch>
        {routes.map((item, index) => (
            <Route key={index}
                   path={item.path}
                   exact={item.exact}
                   component={item.element}/>
        ))}
    </Switch>);
};

export default AppRouter;