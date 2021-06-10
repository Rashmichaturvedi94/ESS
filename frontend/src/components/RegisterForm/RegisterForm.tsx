import React, { FC } from 'react';
import { Box, FormHelperText, Radio, RadioGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import { NameField, UsernameField, EmailField, PasswordField, RadioField } from './RegisterForm.styles';
import { useForm } from '../../hooks/useForm';
import { RegisterFormProps, RegisterFormValues } from './RegisterForm.interface';

const initialValues: RegisterFormValues = {
  name: '',
  username: '',
  email: '',
  password: '',
  password2: '',
  is_publisher: false,
};

const validationSchema: Yup.SchemaOf<RegisterFormValues> = Yup.object().shape({
  name: Yup.string().required('Required field'),
  username: Yup.string().required('Required field'),
  email: Yup.string().required('Required field'),
  password: Yup.string().required('Required field'),
  password2: Yup.string().required('Required field'),
  is_publisher: Yup.boolean().required('Required field'),
});

export const RegisterForm: FC<RegisterFormProps> = (props) => {
  const { errors, values, handleChange, handleSubmit } = useForm({
    initialValues,
    validationSchema,
    ...props,
  });

  const [value, setValue] = React.useState('');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  // eslint-disable-next-line no-return-assign
  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gridRowGap={20} style={{ margin: '0px 220px'}}>
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
        <EmailField
          fullWidth
          name="email"
          placeholder='Email'
          error={!!errors.email}
          helperText={errors.email}
          value={values.email}
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
          <RadioGroup aria-label="Type" name="is_publisher" value={value} onChange={handleRadioChange}>
            <RadioField value="true" control={<Radio color="default" />} label="Author"/>
            <RadioField value="false" control={<Radio color="default"/>} label="Student" />
          </RadioGroup>
        <Button type="submit" variant="contained" fullWidth>
          Register
        </Button>
      </Box>
    </form>
  );
};
