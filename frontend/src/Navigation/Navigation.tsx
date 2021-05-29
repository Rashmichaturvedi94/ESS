import React, { FC } from 'react';
import { Link, Redirect, Switch } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  Divider,
} from '@material-ui/core';
import {
  Navigation as NavigationComponent,
  MyAvatar,
} from './Navigation.styles';

import { Logo } from '../components/icons/Logo';
import { AuthRoute } from '../components/AuthRoot';
import { appPaths, paths } from '../const/paths';
import { SearchCourse } from '../containers/SearchCourse';

export const Navigation: FC = () => (
    <NavigationComponent>
      <AppBar position="relative" elevation={0}>
        <Toolbar>
          <Box flex={1} display="flex">
            <Link to='/'>
              <Logo />
            </Link>
            <Box alignItems="center" display="flex" gridColumnGap={10}>
              <Link to={appPaths.user}>
                <MyAvatar />
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Divider />
      <Box flex={1} display="flex" overflow="hidden">
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          alignItems="stretch"
          justifyContent="stretch"
          overflow="scroll"
          p={4}
        >
          <Switch>
            <AuthRoute
              path={appPaths.searchCourse}
              component={SearchCourse}
            />
            <Redirect from={paths.app} to={appPaths.searchCourse} />
          </Switch>
        </Box>
      </Box>
    </NavigationComponent>
  );
