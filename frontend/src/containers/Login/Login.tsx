import React, { FC, useEffect } from 'react';
import { Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {
  Login as LoginComponent
} from './Login.styles';
import { LoginForm } from '../../components/LoginForm';
import { useLogin } from '../../api/api.hooks';
import { paths } from '../../const/paths';

export const Login: FC = () => {
  const { error, mutate, status } = useLogin();
  const history = useHistory();

  useEffect(() => {
    if (status === 'success') {
      history.push(paths.app);
    }
  }, [status]);

  return (
    <LoginComponent>
      <Box flex={1} display="flex" alignItems="center" justifyContent="center">
        <Box display="flex" flexDirection="column" width={320} gridRowGap={20}>
          <LoginForm
            errors={error?.response?.data}
            onSubmit={(data) => mutate({ data })}
          />
          <Button
            fullWidth
            variant="text"
          >
            Register
          </Button>
        </Box>
      </Box>
      </LoginComponent>
  );
};
