import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const Profile = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const NameField = styled(TextField)`
  height: 48px;
  margin: 4px 1px;
`;

export const UsernameField = styled(TextField)`
  height: 48px;
  margin-bottom: 4px;
`;

export const EmailField = styled(TextField)`
  height: 48px;
  margin: 4px 1px;
`;

export const PasswordField = styled(TextField)`
  height: 48px;
  margin-bottom: 4px;
`;
