import React, { FC } from 'react';
import { GridList, Typography, GridListTile } from '@material-ui/core';
import { SearchCourseProps } from './SearchCourse.interface';
import { useCourses } from '../../api';
import { course as dummy } from '../../mocks/fixtures';

export const SearchCourse: FC<SearchCourseProps> = () => {
  const courses = useCourses();
  console.log(dummy.id);
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
