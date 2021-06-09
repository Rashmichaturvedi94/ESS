import React, { FC } from 'react';
import { Link, Redirect, Switch } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  Divider,
} from '@material-ui/core';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import {
  Navigation as NavigationComponent,
  MyAvatar,
  Title,
  HomeLink,
} from './Navigation.styles';
import { AuthRoute } from '../components/AuthRoot';
import { appPaths, paths } from '../const/paths';
import { SearchCourse } from '../containers/SearchCourse';
import { MyCourses } from '../containers/MyCourses';
import { Profile } from '../containers/Profile';

export const Navigation: FC = () => (
    <NavigationComponent>
      <AppBar position="relative" elevation={0}>
        <Toolbar style={{ backgroundColor: 'black' }}>
          <Box flex={1} display="flex">
            <Box display="flex" flex={1}>
              <Link to={paths.app}>
                <Box display="flex" flexDirection="row" flex={1}>
                  <ImportContactsIcon style={{ color: 'white', fontSize: 44 }} />
                  <Title>Genious</Title>
                </Box>
              </Link>
            </Box>
            <Box alignItems="center" display="flex" gridColumnGap={10}>
              <Link to={paths.app}>
                <HomeLink>Home</HomeLink>
              </Link>
              <Link to={appPaths.myCourses}>
                <HomeLink>My Courses</HomeLink>
              </Link>
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
             <AuthRoute
              path={appPaths.user}
              component={Profile}
            />
            <AuthRoute
              path={appPaths.myCourses}
              component={MyCourses}
            />
            
            <Redirect from={paths.app} to={appPaths.searchCourse} />
          </Switch>
        </Box>
      </Box>
    </NavigationComponent>
  );
