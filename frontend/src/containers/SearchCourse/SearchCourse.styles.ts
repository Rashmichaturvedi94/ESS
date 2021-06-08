import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SearchCourseProps } from './SearchCourse.interface';

export const SearchCourse = styled.div<Pick<SearchCourseProps, 'myProp'>>`
  /* Add styles here */
`;

export const GridListTileLink = styled(Link)`
 text-decoration: none;
 color: initial;
 
 &.MuiGridListTile-tile {
 display: flex;
 }
`;