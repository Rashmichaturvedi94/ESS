import styled from 'styled-components';
import { TextField, TextareaAutosize } from '@material-ui/core';

export const Course = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const NameField = styled(TextField)`
  height: 48px;
  margin: 2px 1px;
`;

export const DescriptionField = styled(TextareaAutosize)`
  height: 100px;
  margin: 2px 1px;
`;

