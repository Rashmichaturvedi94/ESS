import { Box } from '@material-ui/core';
import React, { FC } from 'react';
import ReactPlayer from 'react-player';
import { CreateCourseContentProps } from './CreateCourseContent.interface';

export const CreateCourseContent: FC<CreateCourseContentProps> = () => (  
<Box>
  <h3>Create course content</h3>
  <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
</Box>
  );
