import React, { FC } from 'react';
import { Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Register as RegisterComponent } from './Register.styles';
import { RegisterProps } from './Register.interface';
import { RegisterForm } from '../../components/RegisterForm';
import { paths } from '../../const/paths';
import { useLogin } from '../../api';

export const Register: FC<RegisterProps> = () => {
  const { error, mutate } = useLogin();
  const history = useHistory();

  return (
  <RegisterComponent><Box flex={1} display="flex" alignItems="center" justifyContent="center">
  <Box display="flex" flexDirection="column" width={320} gridRowGap={20}>
    <RegisterForm
      errors={error?.response?.data}
      onSubmit={(data) => mutate({ data })}
    />
    <Button
      fullWidth
      variant="text"
      onClick={() => history.push(paths.login)}
    >
      Login
    </Button>
  </Box>
</Box></RegisterComponent>
);
};
