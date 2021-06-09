import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CourseContentProps } from './CourseContent.interface';

export const CourseContent = styled.div<Pick<CourseContentProps, 'myProp'>>`
flex: 1;
display: flex;
flex-direction: row;
text-decoration: none;
`;

export const GridListTileLink = styled(Link)`
 text-decoration: none;
 color: initial;
 &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: initial;
}
 &.MuiGridListTile-tile {
 display: flex;
 text-decoration: none;
 color: initial;
 }
`;