import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Landing.css';

export default class Karousel extends React.Component {
  render(){
    return(
      <Carousel className="Karousel">
        <Carousel.Item>
          <img alt="img1l" src={require("./img/hp-slideshow-l1-med-std_0.jpg")} />
          <img alt="img1r" src={require("./img/hp-slideshow-r1-med-std_0.jpg")} />
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="img2" src={require("./img/hp-slideshow-l2-med-std.jpg")} />
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="img3" src={require("./img/hp-slideshow-l3-med-std_1.jpg")} />
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="img4" src={require("./img/hp-slideshow-l4-med-std_1.jpg")} />
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="img5" src={require("./img/hp-slideshow-l5-med-std_1.jpg")} />
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="img6" src={require("./img/hp-slideshow-l6-med-std.jpg")} />
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="img7" src={require("./img/hp-slideshow-l7-med-std.jpg")} />
        </Carousel.Item>
      </Carousel>
    )
  }
}