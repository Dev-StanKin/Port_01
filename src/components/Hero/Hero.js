import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, My Name Is
          <br />
          Stanley Waweru.
          <br />I am a Front-end Dev
        </SectionTitle>
        <SectionText>
          I like to build unique UI/UX experiences for humans🚀. I am always
          looking for ways to improve my skills and stay up-to-date with the
          latest trends in web development. In my free time, you can find me
          tinkering with new technologies or contributing to open-source
          projects
        </SectionText>
        <Button
          onClick={() =>
            (window.location = 'https://www.linkedin.com/in/stanley-waweru')
          }
        >
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
