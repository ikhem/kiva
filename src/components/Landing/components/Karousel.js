import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Landing.css';

export default class Karousel extends React.Component {
  render(){
    return(
      <Carousel className="Karousel">
        <Carousel.Item>
          <img width={900} height={500} alt="img1" src={require("./img/hp-slideshow-l1-med-std_0.jpg")} />
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="img2" src={require("./img/hp-slideshow-l1-med-std_0.jpg")} />
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="img3" src={require("./img/hp-slideshow-l1-med-std_0.jpg")} />
        </Carousel.Item>
      </Carousel>
    )
  }
}