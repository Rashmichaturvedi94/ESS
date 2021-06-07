import React, { FC } from 'react';
import { useParams} from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { CourseContentProps } from './CourseContent.interface';

export const CourseContent: FC<CourseContentProps> = () => {
  const  id  = useParams();
  return (
    <Typography variant="h3" align='center'>{id}</Typography>
  );
};