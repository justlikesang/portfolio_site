import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
  SectionHero,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <SectionHero row nopadding>
    <LeftSection>
      <SectionTitle>
        Hi I'm Sang <br />
        Welcome to my Personal Site
      </SectionTitle>
      <SectionText>
        I love writing clean code and making beautiful websites
      </SectionText>
      <Button onClick={() => (window.location = 'https://google.com')}>
        Learn More
      </Button>
    </LeftSection>
  </SectionHero>
);

export default Hero;
