import styled from 'styled-components';
import { Button, Typography } from '@material-ui/core';

export const CourseDetailSubscribe = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const AuthorText = styled(Typography)`
  font-size: 25px;
`;

export const CourseText = styled(Typography)`
  margin-top: 30px;
  font-size: 40px;
  font-weight: 700;
`;

export const DescriptionText = styled(Typography)`
  font-size: 20px;
  font-weight: 80;
  width: 700px;
`;

export const DetailText = styled(Typography)`
  font-size: 25px;
  font-weight: 100;
  margin-left: 50px;
`;

export const ButtonText = styled(Button)`
  font-size: 30px;
  font-weight: 100;
`;
