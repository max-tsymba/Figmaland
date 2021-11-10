import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { privateRoutes, publicRoutes, RouteNames } from "../routes";

const AppRoutes = () => {
  const { isAuth } = useTypedSelector((state) => state.authReducer);
  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          path={route.path}
          exact={true}
          component={route.component}
          key={route.path}
        />
      ))}
      <Redirect to={RouteNames.HOME} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          exact={true}
          component={route.component}
          key={route.path}
        />
      ))}
      <Redirect to={RouteNames.HOME} />
    </Switch>
  );
};

export default AppRoutes;
