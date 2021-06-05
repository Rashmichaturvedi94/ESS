import React, { FC, useEffect } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import {
  Login as LoginComponent
} from './Login.styles';
import { LoginForm } from '../../components/LoginForm';
import { useLogin } from '../../api';
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
      <Box style={{backgroundColor:'#C4C4C4'}} width="30%" height="100%">
      <ImportContactsIcon style={{ color: 'black', fontSize: 150, marginTop: 50, marginLeft: 150}} />
      <Typography variant="h1" component="h2" align='center'>
        Genious
      </Typography>
      <Typography variant="h3" align='center'>E-Learning</Typography>
      </Box>
        <Box display="flex" flexDirection="column" width={320} gridRowGap={20}>
          <LoginForm
            errors={error?.response?.data}
            onSubmit={(data) => mutate({ data })}
          />
          <Button
            fullWidth
            variant="text"
            onClick={() => history.push(paths.register)}
          >
            Forgot Password?
          </Button>
          <Button
            fullWidth
            variant="text"
            onClick={() => history.push(paths.register)}
          >
            Create an Account
          </Button>
        </Box>
      </Box>
      </LoginComponent>
  );
};
