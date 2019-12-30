import { BodyText } from '../shared/Typography';
import { Box } from '../shared/Box';
import React from 'react';
import { Icon } from '../shared/Icon';
import styled from 'styled-components';
import { Theme } from '../shared/theme';

const Container = styled(Box).attrs({ as: 'footer' })`
  border-top: 1px solid ${Theme.colors.mainLight};
  text-align: center;
`;

const Footer = () => {
  return (
    <Container py={['small', 'small', 'small', 'small']}>
      <BodyText className="light">
        Made with <Icon className="icon-heart" /> by{' '}
        <a href="https://github.com/dkarski/minimal-resume-theme/">Daniel Karski</a>{' '}
        <span className="print">
          | <a href="javascript:window.print()">PDF</a> | <a href="#">Go to Up !</a>
        </span>
      </BodyText>
    </Container>
  );
};

export default Footer;
