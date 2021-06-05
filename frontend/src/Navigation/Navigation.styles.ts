import { Avatar, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Navigation = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const MyAvatar = styled(Avatar)`
  border: 2px solid ${({ theme }) => theme.palette.info.main};
  box-sizing: border-box;
  border-radius: 50%;

  & > img {
    border: 2px solid ${({ theme }) => theme.palette.background.paper};
    box-sizing: border-box;
    border-radius: 50%;
  }
`;

export const Title = styled(Typography)`
  color: white;
  font-size: 26px;
  margin: 8px;
`;

export const HomeLink = styled(Typography)`
  color: white;
  font-size: 26px;
  margin: 8px;
`;
