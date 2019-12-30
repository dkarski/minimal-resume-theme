import styled from 'styled-components';
import {
  space,
  color,
  width,
  minHeight,
  maxHeight,
  minWidth,
  maxWidth,
  fontSize,
  flex,
  order,
  alignSelf,
  position,
  borders,
  borderColor,
  textAlign,
  zIndex,
  display,
  boxShadow,
} from 'styled-system';

export const Box = styled('div')(
  space,
  color,
  width,
  minHeight,
  maxHeight,
  minWidth,
  maxWidth,
  fontSize,
  flex,
  order,
  alignSelf,
  display,
  position,
  borders,
  borderColor,
  textAlign,
  zIndex,
  boxShadow,
);

Box.displayName = 'Box';
