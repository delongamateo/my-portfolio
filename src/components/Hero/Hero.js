import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, <br />
        I'm Mateo Delonga <br />
      </SectionTitle>
      <SectionText>Frontend developer</SectionText>
      <Button>Contact me!</Button>
    </LeftSection>
  </Section>
);

export default Hero;