import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const Login = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const UsernameField = styled(TextField)`
  height: 48px;
  margin: 16px 1px;
`;

export const PasswordField = styled(TextField)`
  height: 48px;
  margin-bottom: 16px;
`;
