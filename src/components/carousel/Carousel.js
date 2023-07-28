import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import signupimage1 from "../../assets/signupimage1.png";
import signupimage2 from "../../assets/signupimage2.png";
import signupimage3 from "../../assets/signupimage3.png";

const CarouselPage = () => {
  return ( 
    <Carousel>
      <div>
        <img src={signupimage1} alt="signupimage1" ImageStyle={{tintColor:'rgba(0, 99, 0, 0.5)'}}/>
       
      </div>
      <div>
        <img src={signupimage2} alt="signupimage2" />
        
      </div>
      <div>
        <img src={signupimage3} alt="signupimage3" />
       
      </div>
    </Carousel>
  );
};

export default CarouselPage;