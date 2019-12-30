import React from 'react';
import DynamicComponent from './DynamicComponent';
import { Theme } from '../theme';

const { heading, canon, trafalgar, bodyText, mediumText } = Theme.textStyles;

export const Heading = props => (
  <DynamicComponent {...heading} {...props}>
    {props.children}
  </DynamicComponent>
);

export const Canon = props => (
  <DynamicComponent {...canon} {...props}>
    {props.children}
  </DynamicComponent>
);

export const Trafalgar = props => (
  <DynamicComponent {...trafalgar} {...props}>
    {props.children}
  </DynamicComponent>
);

export const BodyText = props => (
  <DynamicComponent {...bodyText} {...props}>
    {props.children}
  </DynamicComponent>
);

export const MediumText = props => (
  <DynamicComponent {...mediumText} {...props}>
    {props.children}
  </DynamicComponent>
);

export * from './BaseTypography';
