import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import landingimage from "../../assets/landingimage.svg";
import landingimage2 from "../../assets/landingpage2.svg";
import landingimage3 from "../../assets/landingpage3.svg";

const BackgroundImage = () => {
  return ( 
    <Carousel>
      <div>
        
        <img src={landingimage} alt="landingimage"/>
       
      </div>
      <div>
        <img src={landingimage2} alt="landingimage2" />
        
      </div>
      <div>
        <img src={landingimage3} alt="landingimage3" />
       
      </div>
    </Carousel>
  );
};

export default BackgroundImage;