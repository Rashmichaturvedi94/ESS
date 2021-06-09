import React, { FC } from 'react';
import { Box, FormHelperText, Typography } from '@material-ui/core';
import CloudCircle from '@material-ui/icons/CloudCircle';

import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import { NameField, DescriptionField } from './CreateCourseContentForm.styles';
import { useForm } from '../../hooks/useForm';
import { CreateCourseContentFormProps, CreateCourseContentFormValues } from './CreateCourseContentForm.interface';
import { getUserIdFromLocalStorage } from '../../api/api.helpers';

const initialValues: CreateCourseContentFormValues = {
  title: '',
  description: '',
  imgSrc: 'testForNow',
  course: 1,
  created_by: getUserIdFromLocalStorage(),
  img: undefined
};

const validationSchema: Yup.SchemaOf<CreateCourseContentFormValues> = Yup.object().shape({
  title: Yup.string().required('Required field'),
  description: Yup.string().required('Required field'),
  imgSrc: Yup.string().required('Required field'),
  created_by: Yup.number().required('Required field'),
  course: Yup.number().required('Required field'),
  img: Yup.object().shape({file: Yup.mixed()}).nullable()

});

export const CreateCourseContentForm: FC<CreateCourseContentFormProps> = (props) => {
  const { errors, values, handleChange, handleSubmit, setFieldValue } = useForm({
    initialValues,
    validationSchema,
    ...props,
  });

  return (
    <form onSubmit={handleSubmit} id="createCourseContentForm">
      <Box display="flex" flexDirection="column" gridRowGap={10}>
        {errors?.detail && (
          <FormHelperText error>{errors?.detail}</FormHelperText>
        )}
        <Typography variant="h4" component="h2" align='left'>
        Create Course Content
      </Typography>
      <Typography variant="h6" component="h2" align='left'>
        Title
      </Typography>
        <NameField
          fullWidth
          name="title"
          placeholder='Title'
          error={!!errors.title}
          helperText={errors.title}
          value={values.title}
          onChange={handleChange}

        />
        <Typography variant="h6" component="h2" align='left'>
        Description
      </Typography>
        <DescriptionField
          name="description"
          placeholder='Description'
          rowsMax={4}
          rowsMin={4}
          
          value={values.description}
          onChange={handleChange}

        />
        <Typography variant="h6" component="h2" align='left'>
        Thumbnail
      </Typography>
        <Button
            variant="contained"
            component="label"
            style={{backgroundColor:'white', color:'black'}}
        >
           <CloudCircle />
            Attach File
            <input
              type="file"
              hidden
              name="img"
              id="img"
              onChange={(event) => {
                setFieldValue("img", 
                // @ts-ignore
                event.currentTarget.files[0]);
              }}
            />
        </Button>
        <Button type="submit" variant="contained" fullWidth>
          Save
        </Button>
      </Box>
    </form>
  );
};
