import React, { FC } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { Register as RegisterComponent } from './Register.styles';
import { RegisterProps } from './Register.interface';
import { RegisterForm } from '../../components/RegisterForm';
import { paths } from '../../const/paths';
import { useLogin } from '../../api';

export const Register: FC<RegisterProps> = () => {
  const { error, mutate } = useLogin();
  const history = useHistory();

  return (
  <RegisterComponent>
    <Box flex={1} display="flex" alignItems="center" justifyContent="center">
      <Box style={{backgroundColor:'#C4C4C4'}} width="45%" height="100%">
        <ImportContactsIcon style={{ color: 'black', fontSize: 150, marginTop: 50, marginLeft: 150}} />
        <Typography variant="h2" component="h2" align='center'>
          Genious
        </Typography>
        <Typography variant="h3" align='center'>E-Learning</Typography>
      </Box>
      <Box display="flex" flexDirection="column" width="55%" gridRowGap={20}>
        <RegisterForm
          errors={error?.response?.data}
          onSubmit={(data) => mutate({ data })}
        />
        <Button
          fullWidth
          variant="text"
          onClick={() => history.push(paths.login)}
        >
          Already have an account? Login
        </Button>
      </Box>
    </Box>
  </RegisterComponent>
  );
};
