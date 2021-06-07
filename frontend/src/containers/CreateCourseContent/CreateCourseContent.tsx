import React, { FC } from 'react';
import { BrowserRouter as Router,  Link,  Route, useParams } from 'react-router-dom';
import { Box, GridList, Typography, GridListTile } from '@material-ui/core';
import { CreateCourseContentProps } from './CreateCourseContent.interface';
import { useCourse } from '../../api';
import { CourseParams } from '../../api/api.interface';
import {
  CreateCourseContent as CreateCourseContentComponent
} from './CreateCourseContent.styles';

function CurrentContent() {
  const  currentContent  = useParams();
  console.log(currentContent);
  return (
    <Box>
    <Typography variant="h3" component="h2" align='center'>
       {Object.values(currentContent)}
    </Typography>
    </Box>
  );
};

export const CreateCourseContent: FC<CreateCourseContentProps> = () => {

  const { courseId } = useParams<CourseParams>();
  const course = useCourse({ courseId });
  console.log(course);
  return (
  <CreateCourseContentComponent>
    <Router>
       <React.Fragment key="key">
          <Box flex={1} display="flex" alignItems="center" justifyContent="center">
          <Box style={{backgroundColor:'#C4C4C4'}} width="30%" height="100%">
          <Typography variant="h3" component="h2" align='center'>
             You are watching 
           </Typography> 
          <Route path='/:currentContent'>
                <CurrentContent />
          </Route>
          </Box>
          <Box display="flex" flexDirection="column" width={600} gridRowGap={15}>
        
           <GridList>
             <Typography variant="h3" component="h2" align='center'>Course contents</Typography>
              {course.data?.contents.map((content) => (
                <Link to={`/${content.title.toString()}`}>
                  <GridListTile key={content.id} style={{ height: 110, width: 560, border: '2px solid black', margin: 4, fill: 'white' }}>
                    <Box flex={1} display="flex" alignItems="left" justifyContent="left" style={{backgroundColor:'#FFFFFF'}}> 
                      <Box>
                       <img src={content.url} style={{ height: 110, width:110, overflow: 'hidden' }} alt={content.title}/>
                      </Box>
                      <Box>
                        <Typography variant="h5" component="h2" align='left' style={{textDecoration: '#000000'}}>{content.title}</Typography>
                        <Typography variant="h6" component="h2" align='left' style={{textDecoration: '#000000'}}>{content.description}</Typography>
                      </Box>
                    </Box>
                  </GridListTile>
                </Link>
              ))}
            </GridList>
            </Box>
            </Box>
         </React.Fragment>
       </Router>
    </CreateCourseContentComponent>
    
  );
};