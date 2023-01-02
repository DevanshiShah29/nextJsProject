import React from "react";
import Image from "next/image";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
// import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from "./HeroStyles";
import hiPic from "../../images/goodbye.png";

function GraphCMSImageLoader({ src, width }) {
  const relativeSrc = (src) => src.split("/").pop();

  return `https://media.graphcms.com/resize=width:${width}/${relativeSrc(src)}`;
}
const Hero = (props) => {
    const { description, image, title } = props.heroSectionData
  return (
    <>
      <Section row nopadding className="heroWrapper">
        <LeftSection>
          <div className="sectionTitle">
            Hello{" "}
            <Image
              src={hiPic}
              alt="Picture of the author"
              width="50px"
              height="50px"
              className="helloImage"
            /> {" "}
            I am <br />
           {title}
          </div>
          <div className="sectionText">
            {description}
          </div>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;
