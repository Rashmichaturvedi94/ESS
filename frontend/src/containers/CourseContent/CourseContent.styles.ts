import styled from 'styled-components';
import { CourseContentProps } from './CourseContent.interface';

export const CourseContent = styled.div<Pick<CourseContentProps, 'myProp'>>`
  /* Add styles here */
`;
