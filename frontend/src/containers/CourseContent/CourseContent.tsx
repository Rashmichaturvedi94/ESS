import ReactPlayer from 'react-player';
import React, { FC, useState } from 'react';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import { Box, GridList, Typography, GridListTile, Divider, Button } from '@material-ui/core';
import { CourseContentProps } from './CourseContent.interface';
import { useCourse } from '../../api';
import { CourseParams, CourseContents } from '../../api/api.interface';
import {
  CourseContent as CourseContentComponent, LessonText
} from './CourseContent.styles';

export const getImage = (courseContent: CourseContents) => typeof courseContent.img === 'string' ? courseContent.img : 'https://content.techgig.com/thumb/msid-79844104,width-860,resizemode-4/5-Best-programming-languages-to-learn-in-2021.jpg?140622';
  
export const CourseContent: FC<CourseContentProps> = () => {

  const { courseId } = useParams<CourseParams>();
  const course = useCourse({ courseId });
  const [currentVideo, setCurrentVideo] = useState('');

  return (
    <CourseContentComponent>
      <Router>
        <React.Fragment key="key">
            <Box flex={1} display="flex" alignItems="center" justifyContent="center">
            <Box style={{ margin: 2}} width="50%" height="100%" justifyContent="center">
              <Box style ={{padding: 2}} justifyContent="center"  alignItems="center">
                <Typography variant="h3" component="h2" align='left'>
                  {course.data?.title}
                </Typography> 
            </Box>
            <ReactPlayer url={currentVideo} />
            </Box>
            <Divider orientation="vertical" style={{color: 'black', width: 5}}/>
            <Box display="flex" flexDirection="column" width={600} gridRowGap={10} paddingLeft = '25px'>
            <GridList>
              <LessonText>Lessons</LessonText>
                {course.data?.contents?.map((content) => (
                  <GridListTile key={content.id} style={{ height: 110, width: 560, border: '2px solid black', margin: 2 }}>
                    <Button onClick={() => setCurrentVideo(content.url ?? '')}>
                      <Box flex={1} display="flex" alignItems="left" justifyContent="top" style={{ backgroundColor: 'white' }}> 
                        <Box>
                          <img src={getImage(content)} style={{ height: 110, width:110, overflow: 'hidden' }} alt={content.title}/>
                        </Box>
                        <Box justifyContent="center" alignItems="left" style={{margin: 2}}>
                          <Typography variant="h5" component="h2" align='left'>{content.title}</Typography>
                          <Typography variant="h6" component="h2" align='left'>{content.description}</Typography>
                        </Box>
                      </Box>
                    </Button>
                  </GridListTile>
                ))}
              </GridList>
              </Box>
              </Box>
          </React.Fragment>
        </Router>
      </CourseContentComponent>
  );
};
