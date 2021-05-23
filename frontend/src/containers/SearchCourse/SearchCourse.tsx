import React, { FC } from 'react';
import { SearchCourse as SearchCourseComponent } from './SearchCourse.styles';
import { SearchCourseProps } from './SearchCourse.interface';

export const SearchCourse: FC<SearchCourseProps> = ({ children }) => (
  <SearchCourseComponent>{children}</SearchCourseComponent>
);
