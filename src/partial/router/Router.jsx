import { Route, Switch } from "react-router-dom";

import React from 'react';
import { routeMap } from "../../setup/routeMap";

function Router() {
    return (
        <Switch>
            {
                routeMap.map((route, index) => {
                    return <Route key={index} {...route} />
                })
            }
        </Switch>
    );
};

export default Router;