import ReactPlayer from 'react-player';
import React, { FC, useState } from 'react';
import { BrowserRouter as Router,  Route, useParams } from 'react-router-dom';
import { Box, GridList, Typography, GridListTile, Divider, Button } from '@material-ui/core';
import { CourseContentProps } from './CourseContent.interface';
import { useCourse, useCourseContent } from '../../api';
import { CourseParams, ContentParams, CourseContents } from '../../api/api.interface';
import {
  CourseContent as CourseContentComponent
} from './CourseContent.styles';

function CurrentContent() {
  const  {contentId}  = useParams<ContentParams>();
  const content = useCourseContent({ contentId });
    console.log(content);
    return (
      <Box>
        <Typography variant="h3" component="h2" align='center'>
          {/* <img src={content.url} style={{ height: 110, width:110, overflow: 'hidden' }} alt={content.title}/> */}
        </Typography>
      </Box>
    );
};

export const CourseContent: FC<CourseContentProps> = () => {

  const { courseId } = useParams<CourseParams>();
  const course = useCourse({ courseId });
  const getImage = (courseContent: CourseContents) => typeof courseContent.img === 'string' ? courseContent.img : '';
  const [currentVideo, setCurrentVideo] = useState('https://www.youtube.com/watch?v=ysz5S6PUM-U');

  return (
  <CourseContentComponent>
    <Router>
       <React.Fragment key="key">
          <Box flex={1} display="flex" alignItems="center" justifyContent="center">
          <Box style={{ margin: 2}} width="50%" height="100%" justifyContent="center">
            <Box style ={{padding: 2}} justifyContent="center"  alignItems="center">
              <Typography variant="h3" component="h2" align='left'>
                You are watching 
              </Typography> 
           </Box>
           <Route path='/:currentContent'>
                <CurrentContent />
          </Route>
          <ReactPlayer url={currentVideo} />
          </Box>
          <Divider orientation="vertical" style={{color: 'black', width: 5}}/>
          <Box display="flex" flexDirection="column" width={600} gridRowGap={10} paddingLeft = '25px'>
           <GridList>
             <Typography variant="h3" component="h4" align='center'>Lessons</Typography>
              {course.data?.contents?.map((content) => (
                <GridListTile key={content.id} style={{ height: 110, width: 560, border: '2px solid black', margin: 2 }}>
                  <Button onClick={() => setCurrentVideo('https://www.youtube.com/watch?v=GvGzFSkSQo4')}>
                    <Box flex={1} display="flex" alignItems="left" justifyContent="top" style={{backgroundColor:'#FFFFFF'}}> 
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