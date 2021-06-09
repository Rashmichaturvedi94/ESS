import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { MyCoursesProps } from './MyCourses.interface';

export const MyCourses = styled.div<Pick<MyCoursesProps, 'myProp'>>`
  /* Add styles here */
`;

export const SubscribedTitle = styled(Typography)`
  border-bottom: 1px;
  border-color: black;
`;
