import styled from 'styled-components';
import { TextField, TextareaAutosize, Button } from '@material-ui/core';

export const Course = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const NameField = styled(TextField)`
  height: 48px;
  margin: 16px 1px;
`;

export const DescriptionField = styled(TextareaAutosize)`
  height: 80px;
`;

export const ThumbnailButton = styled(Button)`
  margin: 16px 1px;
`;
