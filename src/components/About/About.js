import React from 'react';
import Slider from 'react-slick';

import { AiOutlineDownload } from 'react-icons/ai';

const Hero = (props) => {
  const { description, title } = props.aboutSectionData;
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="aboutWrapper">
        <div className="sectionTitle">{title}</div>
        <div className="sectionText">{description}</div>
        <div>
          <Slider {...settings}>
            {props.aboutSliderData.nodes.map((item) => {
              return (
                <div key={item.title}>
                  <img src={item.featuredImage.node.sourceUrl} alt={item.title} />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="buttonWrapper">
          <button className="button">
            {' '}
            Download CV <AiOutlineDownload size="2rem" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
