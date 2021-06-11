import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { CreateCourseContent as CreateCourseContentComponent } from './CreateCourseContent.styles';
import { CreateCourseContentProps } from './CreateCourseContent.interface';
import { CreateCourseContentForm } from '../../components/CreateCourseContentForm';
import { usePostCourseContent } from '../../api';
import { CourseParams } from '../../api/api.interface';

export const CreateCourseContent: FC<CreateCourseContentProps> = () => {  
  const { mutate } = usePostCourseContent();
  const  { courseId } = useParams<CourseParams>();
  
  return (
    <CreateCourseContentComponent>
      <Box flex={1} display="flex" alignItems="center" justifyContent="center">
        <Box display="flex" flexDirection="column" width={320} gridRowGap={20}>
        <div/>
        </Box>
          <Box width="30%" >
            <CreateCourseContentForm
              onSubmit={(data) => {
                const payload = data;
                payload.course = (courseId ?? '1') as unknown as number;
                mutate({ data: payload });
              }}
            />
          </Box>
        </Box>
      </CreateCourseContentComponent>
      );
    };
