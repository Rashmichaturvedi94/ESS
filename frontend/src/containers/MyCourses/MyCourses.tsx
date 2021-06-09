import React, { FC } from 'react';
import { Box, GridList, Typography, GridListTile } from '@material-ui/core';
// import { SubscribedTitle } from './MyCourses.styles';
// import { MyCourses as MyCoursesComponent, SubscribedTitle } from './MyCourses.styles';
import { MyCoursesProps } from './MyCourses.interface';
import { useSubscriptions } from '../../api';
import { Course } from '../../api/api.interface';

export const MyCourses: FC<MyCoursesProps> = () => {
  const subscriptions = useSubscriptions();
  const getImage = (course: Course) => typeof course.img === 'string' ? course.img : '';
  return (
    <Box style={{ marginLeft: 20, marginRight: 20}}>
      <Typography variant="h4" component="h2" align='left'>
        Subscribed
      </Typography>
      <GridList>
        {subscriptions.data?.map((subscription) => (
          <GridListTile key={subscription.course.id} style={{ height: 258, width: 224, border: '2px solid black', margin: 8}}>
            <img src={getImage(subscription.course)} style={{ height: 196, width:220, overflow: 'hidden' }} alt={subscription.course.title}/>
            <Typography>{subscription.course.title}</Typography>
            <Typography>{subscription.course.description}</Typography>
          </GridListTile>
        ))}
      </GridList>
  </Box>
  );
};
