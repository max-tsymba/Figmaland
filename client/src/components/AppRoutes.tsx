import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';

const AppRoutes = () => {
    const auth = false;
    return (
        auth 
            ?
            <Switch>
                {privateRoutes.map(route => 
                    <Route 
                        path={route.path} 
                        exact={true} 
                        component={route.component}
                        key={route.path}
                    />
                )}
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route 
                        path={route.path} 
                        exact={true} 
                        component={route.component}
                        key={route.path}
                    />
                )}
            </Switch>
    )
}

export default AppRoutes
