import React, { FC } from 'react';
import { Box, FormHelperText, Typography } from '@material-ui/core';
import CloudCircle from '@material-ui/icons/CloudCircle';

import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import { NameField, DescriptionField } from './CourseForm.styles';
import { useForm } from '../../hooks/useForm';
import { CourseFormProps, CourseFormValues } from './CourseForm.interface';
import { getUserIdFromLocalStorage } from '../../api/api.helpers';

const initialValues: CourseFormValues = {
  title: '',
  description: '',
  price: 0,
  imgSrc: 'testForNow',
  created_by: getUserIdFromLocalStorage(),
  img: undefined
};

const validationSchema: Yup.SchemaOf<CourseFormValues> = Yup.object().shape({
  title: Yup.string().required('Required field'),
  description: Yup.string().required('Required field'),
  imgSrc: Yup.string().required('Required field'),
  price: Yup.number().required('Required field'),
  created_by: Yup.number().required('Required field'),
  img: Yup.object().shape({file: Yup.mixed()}).nullable()

});

export const CourseForm: FC<CourseFormProps> = (props) => {
  const { errors, values, handleChange, handleSubmit } = useForm({
    initialValues,
    validationSchema,
    ...props,
  });

// const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const fileList = e.target.files;

//     if (fileList) {
//       const myForm = document.getElementById('courseForm') as HTMLFormElement;
//       const formData = new FormData(myForm);
//       formData.append("img", fileList[0], fileList[0].name);
//     }
//   };

  
  return (
    <form onSubmit={handleSubmit} id="courseForm">
      <Box display="flex" flexDirection="column" gridRowGap={10}>
        {errors?.detail && (
          <FormHelperText error>{errors?.detail}</FormHelperText>
        )}
        <Typography variant="h4" component="h2" align='left'>
        Create Course
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
        Price
      </Typography>
        <NameField
          fullWidth
          name="price"
          placeholder='Price'
          error={!!errors.price}
          helperText={errors.price}
          value={values.price}
          onChange={handleChange}
          InputProps={{ inputMode: 'numeric' }}
          type="number"
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
              onChange={handleChange}

            />
        </Button>
        <Button type="submit" variant="contained" fullWidth>
          Save
        </Button>
      </Box>
    </form>
  );
};
