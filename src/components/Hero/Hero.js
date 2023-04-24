import React from 'react';
import Image from 'next/image';
import { Section } from '../../styles/GlobalComponents';
// import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import hiPic from '../../images/goodbye.png';

const Hero = (props) => {
  const { herodescription, herotitle } = props.heroSectionData;
  return (
    <>
      <Section row nopadding className="heroWrapper">
        <LeftSection>
          <div className="sectionTitle">
            Hello{' '}
            <Image
              src={hiPic}
              alt="Picture of the author"
              width="50px"
              height="50px"
              className="helloImage"
            />{' '}
            I am <br />
            {herotitle}
          </div>
          <div className="sectionText">{herodescription}</div>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;
