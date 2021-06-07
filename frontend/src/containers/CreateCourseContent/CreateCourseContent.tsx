import React, { FC } from 'react';
import { useParams} from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { CreateCourseContentProps } from './CreateCourseContent.interface';

export const CreateCourseContent: FC<CreateCourseContentProps> = () => {
  const  id  = useParams();
  return (
    <Typography variant="h3" align='center'>{id}</Typography>
  );
};