import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Carousel, Wrap} from './styles'

function SliderBanner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
    };
  return (
      <Carousel {...settings}>
          <Wrap>
              <img src="/images/slide-avengers.jpg" alt="avenger" />
          </Wrap>

          <Wrap>
              <img src="/images/slider-badag.jpg" alt="badag" />
          </Wrap>


          <Wrap>
              <img src="/images/slider-scale.jpg" alt="scale" />
          </Wrap>

          <Wrap>
              <img src="/images/slider-badging.jpg" alt="badging" />
          </Wrap>


          <Wrap>
              <img src="/images/slider-scales.jpg" alt="scales" />
          </Wrap>


          <Wrap>
              <img src="/images/slide-avengers.jpg" alt="avengers" />
          </Wrap>



    </Carousel>
  )
}

export default SliderBanner