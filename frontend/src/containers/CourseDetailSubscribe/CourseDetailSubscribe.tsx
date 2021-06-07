import React, { FC } from 'react';
import { Typography, Box, Divider } from '@material-ui/core';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LayersIcon from '@material-ui/icons/Layers';
import { useParams } from 'react-router-dom';
import { CourseDetailSubscribe as CourseDetailSubscribeComponent, AuthorText, CourseText } from './CourseDetailSubscribe.styles';
import { CourseDetailSubscribeProps } from './CourseDetailSubscribe.interface';
import { useCourse } from '../../api';
import { CourseParams } from '../../api/api.interface';


export const CourseDetailSubscribe: FC<CourseDetailSubscribeProps> = () => {
  const { courseId } = useParams<CourseParams>();
  const course = useCourse({ courseId });
  console.log(course, courseId);
  return ( 
    <CourseDetailSubscribeComponent>
      <Box>
        <Box flex={1} display="flex" style={{marginLeft: 400}}> 
          <PersonPinCircleIcon style={{ color: 'black', fontSize: 30}} />
          <AuthorText>Author</AuthorText>
        </Box>
        <Box style={{ marginLeft: 40, marginRight: 80}}>
          <img src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg" style={{ height: 400, width: 470, overflow: 'hidden'}} alt={course.data?.title}/>
          <CourseText>{course.data?.title}</CourseText>
          <Typography>{course.data?.description}</Typography>
        </Box>  
      </Box>
      <Divider orientation="vertical" style={{color: 'black', width: 5}}/>
            <Box>
        <Box flex={1} display="flex" style={{marginLeft: 100, marginTop: 50 }}> 
          <ScheduleIcon style={{ color: 'black', fontSize: 30}} />
          <AuthorText>Duration</AuthorText>          
          <LayersIcon style={{ color: 'black', fontSize: 30}} />
          <AuthorText>Lessons</AuthorText>

        </Box>
      </Box>
    </CourseDetailSubscribeComponent>
  );
};
