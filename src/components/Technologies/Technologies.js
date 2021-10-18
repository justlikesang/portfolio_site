import React from 'react';
import {
  SiStyledcomponents,
  SiFlask,
  SiGithub,
  SiGit,
  SiPostgresql,
} from 'react-icons/si';
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiJsBadge,
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
  DiPython,
} from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  SectionHero,
} from '../../styles/GlobalComponents';
import {
  Icon,
  IconContainer,
  IconText,
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <SectionHero id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <br />
    <SectionDivider divider />
    <SectionText>These are some of the languages and technologies that I love to use. My main focus being React</SectionText>
    <IconContainer>
      <Icon>
        <DiJsBadge size="3em" />
        <IconText>Javascript</IconText>
      </Icon>
      <Icon>
        <DiReact size="3em" />
        <IconText>React</IconText>
      </Icon>
      <Icon>
        <DiHtml5 size="3em" />
        <IconText>HTML5</IconText>
      </Icon>
      <Icon>
        <DiCss3 size="3em" />
        <IconText>CSS3</IconText>
      </Icon>
      <Icon>
        <DiNodejsSmall size="3em" />
        <IconText>Node.js</IconText>
      </Icon>
    </IconContainer>
    <IconContainer>
      <Icon>
        <DiPython size="3em" />
        <IconText>Python</IconText>
      </Icon>
      <Icon>
        <SiFlask size="3em" />
        <IconText>Flask</IconText>
      </Icon>
      <Icon>
        <SiGithub size="3em" />
        <IconText>Github</IconText>
      </Icon>
      <Icon>
        <SiGit size="3em" />
        <IconText>Git</IconText>
      </Icon>
      <Icon>
        <SiPostgresql size="3em" />
        <IconText>PSQL</IconText>
      </Icon>
    </IconContainer>
    {/* <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List> */}
  </SectionHero>
);

export default Technologies;
