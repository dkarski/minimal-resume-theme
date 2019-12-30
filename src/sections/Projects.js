import { BodyText, Trafalgar } from '../shared/Typography';
import { Box } from '../shared/Box';
import React from 'react';
import SectionCanon from './SectionCanon';

const Projects = ({ projects }) => {
  return (
    <Box as="section">
      <SectionCanon>Best Project</SectionCanon>
      {projects.map(({ title, role, description }) => (
        <Box mb={['regular', 'regular', 'regular', 'regular']}>
          <Trafalgar textStyle="bold" mb={['xsmall', 'xsmall', 'xsmall', 'xsmall']}>
            {title}
          </Trafalgar>
          <BodyText className="light" mb={['xsmall', 'xsmall', 'xsmall', 'xsmall']}>
            {role}
          </BodyText>
          <BodyText>{description}</BodyText>
        </Box>
      ))}
    </Box>
  );
};

export default Projects;
