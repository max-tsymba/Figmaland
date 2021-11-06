import React from "react";
import Account from "../pages/Account";
import Home from "../pages/Home";
import Login from "../pages/Login";

export  interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/login',
    HOME = '/',
    ACCOUNT = '/account',
}

export const publicRoutes:IRoute[] = [
    {path: RouteNames.HOME, component: Home, exact: true},
    {path: RouteNames.LOGIN, component: Login, exact: true},
]

export const privateRoutes:IRoute[] = [
    {path: RouteNames.HOME, component: Home, exact: true},
    {path: RouteNames.ACCOUNT, component: Account, exact: true},
]