import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Project from './Project';

const Projects = () => {
  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <SectionDivider divider />
      <GridContainer>
        {projects.map((project) => {
          return <Project {...project} />;
        })}
      </GridContainer>
    </Section>
  );
};

export default Projects;
