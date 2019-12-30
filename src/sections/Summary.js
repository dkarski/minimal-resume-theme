import { BodyText } from '../shared/Typography';
import { Box } from '../shared/Box';
import React from 'react';
import SectionCanon from './SectionCanon';

const Summary = ({ summary }) => {
  return (
    <Box as="section">
      <SectionCanon>Summary</SectionCanon>
      <Box mb={['regular', 'regular', 'regular', 'regular']}>
        <BodyText>{summary}</BodyText>
      </Box>
    </Box>
  );
};

export default Summary;
