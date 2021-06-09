import React, { FC } from 'react';
import { GridList, Typography, GridListTile } from '@material-ui/core';
import { SubscriptionsProps } from './Subscriptions.interface';
import { useCourses } from '../../api';

export const Subscriptions: FC<SubscriptionsProps> = () => {
  const courses = useCourses();
  return (
    <GridList>
      {courses.data?.map((course) => (
        <GridListTile key={course.id} style={{ height: 258, width: 224, border: '2px solid black', margin: 8}}>
          <img src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg" style={{ height: 196, width:220, overflow: 'hidden' }} alt={course.title}/>
          <Typography>{course.title}</Typography>
          <Typography>{course.description}</Typography>
        </GridListTile>
      ))}
    </GridList>
  );
};