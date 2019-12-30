import styled from 'styled-components';
import { Box } from './Box';

export const List = styled(Box).attrs({ as: 'ul' })`
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 21px;
`;
