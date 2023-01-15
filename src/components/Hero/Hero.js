import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Portfolio
        </SectionTitle>
        <SectionText>
        I am an experienced, passionate, and enthusiastic problem solver in Tech. I have a High interest in Technology and
Its evolution Especially Web3 and AI. Python and Javascript have been my primary language for the past 3+ years.
I’m an addicted data scientist, Software Developer, dynamic systems modeler, and analyst who loves to work and
collaborate with great people. I love to manipulate data and discover the mysteries hidden behind it and how it can
influence the success of businesses, Health, politics, and society.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;