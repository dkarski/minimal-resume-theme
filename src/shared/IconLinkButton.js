import styled from 'styled-components';
import React from 'react';
import { Icon } from './Icon';

export const IconLinkButton = ({ href, iconClassName, ...props }) => {
  return (
    <IconLinkButton.Link href={href} {...props}>
      <Icon className={iconClassName} />
    </IconLinkButton.Link>
  );
};

IconLinkButton.Link = styled.a`
  text-decoration: none;
  font-size: 30.8px;

  transition: opacity 0.5s;

  &:hover {
    opacity: 0.8;
  }
`;
