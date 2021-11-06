import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import { privateRoutes, publicRoutes, RouteNames } from '../routes';

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
                <Redirect to={RouteNames.HOME}/>
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
                <Redirect to={RouteNames.HOME}/>
            </Switch>
    )
}

export default AppRoutes
