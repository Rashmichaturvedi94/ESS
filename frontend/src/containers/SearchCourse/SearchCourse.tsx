
import React, { FC } from 'react';
import { useHistory, generatePath  } from 'react-router-dom';
import { GridList, Typography, GridListTile } from '@material-ui/core';
import { SearchCourseProps } from './SearchCourse.interface';
import { useCourses } from '../../api';
import { appPaths } from '../../const/paths';
import { Course } from '../../api/api.interface';

export const SearchCourse: FC<SearchCourseProps> = () => {
  const courses = useCourses();
  const history = useHistory();
  const getImage = (course: Course) => typeof course.img === 'string' ? course.img : '';

  return (
    <GridList>
      {courses.data?.map((course) => (
        <GridListTile 
          key={course.id} 
          style={{ height: 258, width: 224, border: '2px solid black', margin: 8}} 
          onClick={() => history.push(generatePath(appPaths.courseDetail, { courseId: course.id }))}>
          <img src={getImage(course)} style={{ height: 196, width:220, overflow: 'hidden' }} alt={course.title}/>
          <Typography>{course.title}</Typography>
          <Typography>{course.description}</Typography>
        </GridListTile>
      ))}
    </GridList>
  );
};
