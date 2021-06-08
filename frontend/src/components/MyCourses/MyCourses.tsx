import React, { FC } from 'react';
import { MyCourses as MyCoursesComponent } from './MyCourses.styles';
import { MyCoursesProps } from './MyCourses.interface';

export const MyCourses: FC<MyCoursesProps> = ({ children }) => (
  <MyCoursesComponent>{children}</MyCoursesComponent>
);
