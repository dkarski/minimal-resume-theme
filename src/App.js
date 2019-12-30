import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './shared/GlobalStyle';
import { Theme } from './shared/theme';
import { Box } from './shared/Box';
import Header from './sections/Header';
import Summary from './sections/Summary';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Footer from './sections/Footer';
import Experience from './sections/Experience';
import profile from './data/profile.png';
import resume from './data/resume.json';

const Container = styled(Box)`
  max-width: 692px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyle />
        <Container>
          <Header profile={profile} {...resume.header} />
          <Summary summary={resume.summary} />
          <Education educations={resume.educations} />
          <Experience experiences={resume.experiences} />
          <Projects projects={resume.projects} />
          <Skills skillGroups={resume.skillGroups} />
          <Footer />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
