import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './index.css';
import { AppContainer } from './App.styles';
import { Login } from '../containers/Login';
import { withProviders } from '../utils/providers';
import { paths } from '../const/paths';
import { AuthRoute } from '../components/AuthRoot';
import { Navigation } from '../Navigation';

const App: React.FC = () => (
  <AppContainer>
    <BrowserRouter>
      <Switch>
        <Route path={paths.login} component={Login} />
        <AuthRoute path={paths.app} component={Navigation} />
        <Redirect to={paths.login} />
      </Switch>
    </BrowserRouter>
  </AppContainer>
);

export const AppWithProviders = withProviders(App);
