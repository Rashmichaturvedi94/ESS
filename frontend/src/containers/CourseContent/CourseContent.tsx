import React, { FC } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Box, GridList, Typography, GridListTile } from '@material-ui/core';
import { CourseContentProps } from './CourseContent.interface';
import { useCourseContents } from '../../api';
import {
  CourseContent as CourseContentComponent
} from './CourseContent.styles';

export const CourseContent: FC<CourseContentProps> = () => {
  const  id  = useParams();
  const courseContents = useCourseContents();
  const history = useHistory();

  return (
  <CourseContentComponent>
    <Box flex={1} display="flex" alignItems="center" justifyContent="center"> 
    <Box style={{backgroundColor:'#C4C4C4'}} width="30%" height="100%">
    <Typography variant="h1" component="h2" align='center'>
      Genious
    </Typography>
    <Typography variant="h3" align='center'>E-Learning</Typography>
    </Box>
      <Box display="flex" flexDirection="column" width={320} gridRowGap={20}>
      <GridList>
        {courseContents.data?.map((content) => (
          <GridListTile key={content.id} style={{ height: 258, width: 224, border: '2px solid black', margin: 8}}
          onClick={() => 
                          history.push(`app/courseContent/${content.id}`)
                  }>
            <img src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg" style={{ height: 196, width:220, overflow: 'hidden' }} alt={content.title}/>
            <Typography>{id}</Typography>
            <Typography>{content.description}</Typography>
          </GridListTile>
        ))}
      </GridList>
      </Box>
    </Box>
    </CourseContentComponent>
    
  );
};