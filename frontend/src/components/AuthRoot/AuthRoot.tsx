import React, { FC, useEffect, useState } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { getIsAuthenticated } from '../../api';
import { paths } from '../../const/paths';

export const AuthRoute: FC<RouteProps> = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();

  useEffect(() => {
    getIsAuthenticated().then(setIsAuthenticated);
  });

  if (isAuthenticated === false) {
    return <Redirect to={paths.login} />;
  }

  return <Route {...props} />;
};
