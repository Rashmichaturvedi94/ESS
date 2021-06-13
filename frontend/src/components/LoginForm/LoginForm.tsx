import React, { FC } from 'react';
import { Box, FormHelperText } from '@material-ui/core';
import * as Yup from 'yup';
import { LoginFormValues, LoginFormProps } from './LoginForm.interface';
import { UsernameField, PasswordField, LoginButton } from './LoginForm.styles';
import { useForm } from '../../hooks/useForm';

const initialValues: LoginFormValues = {
  username: '',
  password: '',
};

const validationSchema: Yup.SchemaOf<LoginFormValues> = Yup.object().shape({
  username: Yup.string().required('Required field'),
  password: Yup.string().required('Required field'),
});

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { errors, values, handleChange, handleSubmit } = useForm({
    initialValues,
    validationSchema,
    ...props,
  });

  return (
    <form onSubmit={handleSubmit} id="loginForm">
      <Box display="flex" flexDirection="column" gridRowGap={20} alignItems="center">
        {errors?.detail && (
          <FormHelperText error>{errors?.detail}</FormHelperText>
        )}
        <UsernameField
          name="username"
          placeholder='Username'
          error={!!errors.username}
          helperText={errors.username}
          value={values.username}
          onChange={handleChange}
        />
        <PasswordField
          name="password"
          type="password"
          placeholder='Password'
          error={!!errors.password}
          helperText={errors.password}
          value={values.password}
          onChange={handleChange}
        />
        <LoginButton type="submit" variant="contained">
          Sign In
        </LoginButton>
      </Box>
    </form>
  );
};
