import React from 'react';
import { BaseTypography } from './BaseTypography';

const DynamicComponent = ({ tag = 'div', children, ...props }) => {
  const WithComponent = BaseTypography.withComponent(tag);
  return <WithComponent {...props}>{children}</WithComponent>;
};

DynamicComponent.defaultProps = {
  tag: 'div',
};

export default DynamicComponent;
