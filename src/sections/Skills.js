import { BodyText, Trafalgar } from '../shared/Typography';
import { Box } from '../shared/Box';
import React from 'react';
import SectionCanon from './SectionCanon';

const Skills = ({ skillGroups }) => {
  return (
    <Box as="section">
      <SectionCanon>Skills</SectionCanon>
      {skillGroups.map(({ groupName, skills }) => (
        <Box mb={['regular', 'regular', 'regular', 'regular']}>
          <Trafalgar textStyle="bold" mb={['xsmall', 'xsmall', 'xsmall', 'xsmall']}>
            {groupName}
          </Trafalgar>
          <BodyText>{skills}</BodyText>
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
