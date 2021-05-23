import React, { ComponentType, FC } from 'react';
import * as Sentry from '@sentry/react';
import { QueryClientProvider } from 'react-query';
import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider } from 'styled-components';
import { StylesProvider, MuiThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { queryClient } from '../api';
import { theme } from '../styles/theme';


const createProviderHOC = (Provider: ComponentType) => <P extends object>(
  Component: ComponentType<P>,
) => (props: P) => (
  <Provider>
    <Component {...props} />
  </Provider>
);
const FallbackComponent = () => <div>An error has occurred</div>;

export const Providers: FC = ({ children }) => (
  <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  </Sentry.ErrorBoundary>
);

export const withProviders = createProviderHOC(Providers);
