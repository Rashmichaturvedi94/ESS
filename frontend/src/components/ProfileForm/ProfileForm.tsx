import React, { FC } from 'react';
import { Box, FormHelperText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import { NameField, UsernameField, EmailField } from './ProfileForm.styles';
import { useForm } from '../../hooks/useForm';
import { ProfileFormProps, ProfileFormValues } from './ProfileForm.interface';

const initialValues: ProfileFormValues = {
  name: '1',
  username: '',
  email: '',
  userId:0
};

const validationSchema: Yup.SchemaOf<ProfileFormValues> = Yup.object().shape({
  name: Yup.string().required('Required field'),
  username: Yup.string().required('Required field'),
  email: Yup.string().required('Required field'),
  userId: Yup.number().required('Required field'),
});

export const ProfileForm: FC<ProfileFormProps> = (props) => {
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
          disabled
        />
        <UsernameField
          fullWidth
          name="username"
          placeholder='Username'
          error={!!errors.username}
          helperText={errors.username}
          value={values.username}
          disabled
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
        <Button type="submit" variant="contained" fullWidth>
          Save
        </Button>
      </Box>
    </form>
  );
};
