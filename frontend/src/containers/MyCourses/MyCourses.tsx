import React, { FC } from 'react';
import { Box, GridList, Typography, GridListTile } from '@material-ui/core';
import { SubscribedTitle } from './MyCourses.styles';
// import { MyCourses as MyCoursesComponent, SubscribedTitle } from './MyCourses.styles';
import { MyCoursesProps } from './MyCourses.interface';
import { useSubscriptions } from '../../api';

export const MyCourses: FC<MyCoursesProps> = () => {
  const subscriptions = useSubscriptions();
  return (
    <Box style={{ borderTop: "2px solid black ", marginLeft: 20, marginRight: 20}}>
      <GridList>
        <GridListTile
        key="SubHeader"
        cols={3}
        style={{height: 25, margin: 8 }}
        >
          <SubscribedTitle><u>Subscribed</u></SubscribedTitle>
        </GridListTile>
        {subscriptions.data?.map((subscription) => (
          <GridListTile key={subscription.course.id} style={{ height: 258, width: 224, border: '2px solid black', margin: 8}}>
            <img src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg" style={{ height: 196, width:220, overflow: 'hidden' }} alt={subscription.course.title}/>
            <Typography>{subscription.course.title}</Typography>
            <Typography>{subscription.course.description}</Typography>
          </GridListTile>
        ))}
      </GridList>
      <GridList>
      <GridListTile
      key="SubHeader"
      cols={3}
      style={{height: 25, margin: 8}}
      >
        <Typography component='div'>Wishlist</Typography>
      </GridListTile>
      {subscriptions.data?.map((subscription) => (
        <GridListTile key={subscription.course.id} style={{ height: 258, width: 224, border: '2px solid black', margin: 8}}>
          <img src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg" style={{ height: 196, width:220, overflow: 'hidden' }} alt={subscription.course.title}/>
          <Typography>{subscription.course.title}</Typography>
          <Typography>{subscription.course.description}</Typography>
        </GridListTile>
      ))}
    </GridList>
  </Box>
  );
};
