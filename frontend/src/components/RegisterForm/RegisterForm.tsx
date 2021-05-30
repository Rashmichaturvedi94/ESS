import React, { FC } from 'react';
import { Box, FormHelperText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import { NameField, UsernameField, PasswordField } from './RegisterForm.styles';
import { useForm } from '../../hooks/useForm';
import { RegisterFormProps, RegisterFormValues } from './RegisterForm.interface';

const initialValues: RegisterFormValues = {
  name: '',
  username: '',
  password: '',
  password2: '',
};

const validationSchema: Yup.SchemaOf<RegisterFormValues> = Yup.object().shape({
  name: Yup.string().required('Required field'),
  username: Yup.string().required('Required field'),
  password: Yup.string().required('Required field'),
  password2: Yup.string().required('Required field'),
});

export const RegisterForm: FC<RegisterFormProps> = (props) => {
  const { errors, values, handleChange, handleSubmit } = useForm({
    initialValues,
    validationSchema,
    ...props,
  });

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gridRowGap={20}>
        {errors?.detail && (
          <FormHelperText error>{errors?.detail}</FormHelperText>
        )}
        <NameField
          fullWidth
          name="name"
          placeholder='Name'
          error={!!errors.name}
          helperText={errors.name}
          value={values.name}
          onChange={handleChange}
        />
        <UsernameField
          fullWidth
          name="username"
          placeholder='Username'
          error={!!errors.username}
          helperText={errors.username}
          value={values.username}
          onChange={handleChange}
        />
        <PasswordField
          fullWidth
          name="password"
          type="password"
          placeholder='Password'
          error={!!errors.password}
          helperText={errors.password}
          value={values.password}
          onChange={handleChange}
        />
        <PasswordField
          fullWidth
          name="password2"
          type="password2"
          placeholder='Confirm Password'
          error={!!errors.password2}
          helperText={errors.password2}
          value={values.password2}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" fullWidth>
          Sign In
        </Button>
      </Box>
    </form>
  );
};
