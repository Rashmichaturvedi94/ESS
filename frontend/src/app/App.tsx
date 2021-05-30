import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './index.css';
import { AppContainer } from './App.styles';
import { Login } from '../containers/Login';
import { withProviders } from '../utils/providers';
import { paths } from '../const/paths';
import { AuthRoute } from '../components/AuthRoot';
import { Navigation } from '../Navigation';
import { Register } from '../containers/Register';

const App: React.FC = () => (
  <AppContainer>
    <BrowserRouter>
      <Switch>
        <Route path={paths.login} component={Login} />
        <Route path={paths.register} component={Register} />
        <AuthRoute path={paths.app} component={Navigation} />
        <Redirect to={paths.login} />
      </Switch>
    </BrowserRouter>
  </AppContainer>
);

export const AppWithProviders = withProviders(App);
