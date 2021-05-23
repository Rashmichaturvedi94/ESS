---
to: <%= root %>/<%= path %>/<%= name %>.styles.ts
---
import styled from 'styled-components';
import { <%= name %>Props } from './<%= name %>.interface';

export const <%= name %> = styled.div<Pick<<%= name %>Props, 'myProp'>>`
  /* Add styles here */
`;
