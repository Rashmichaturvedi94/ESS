import React, { FC } from 'react';
import { GridList, Typography, GridListTile } from '@material-ui/core';
import { SearchCourseProps } from './SearchCourse.interface';
import { useCourses } from '../../api';

export const SearchCourse: FC<SearchCourseProps> = () => {
  const courses = useCourses();
  return (
    <GridList>
      {courses.data?.map((course) => (
        <GridListTile key={course.id}>
          <Typography>{course.title}</Typography>
          <Typography>{course.description}</Typography>
        </GridListTile>
      ))}
    </GridList>
    
  );
};
