import { BodyText, Trafalgar } from '../shared/Typography';
import { Box } from '../shared/Box';
import React from 'react';
import SectionCanon from './SectionCanon';

const Education = ({ educations }) => {
  return (
    <Box as="section">
      <SectionCanon>Education</SectionCanon>
      {educations.map(({ title, date, description }) => (
        <Box mb={['regular', 'regular', 'regular', 'regular']}>
          <Trafalgar textStyle="bold" mb={['xsmall', 'xsmall', 'xsmall', 'xsmall']}>
            {title}
          </Trafalgar>
          <BodyText className="light" mb={['xsmall', 'xsmall', 'xsmall', 'xsmall']}>
            {date}
          </BodyText>
          <BodyText>{description}</BodyText>
        </Box>
      ))}
    </Box>
  );
};

export default Education;
