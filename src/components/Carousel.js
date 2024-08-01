
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import sportsDay from '../assets/images/sports_day.jpg';
import scienceExhibition from '../assets/images/science_exhibition.jpg';
import culturalFest from '../assets/images/cultural_fest.jpg';

const CarouselComponent = () => (
  <Carousel showThumbs={false} infiniteLoop autoPlay interval={5000}>
    <div>
      <img src={sportsDay} alt="Annual Sports Day" />
      <p className="legend">Annual Sports Day - Celebrating Excellence in Sports</p>
    </div>
    <div>
      <img src={scienceExhibition} alt="Science Exhibition" />
      <p className="legend">Science Exhibition - Showcasing Student Innovations</p>
    </div>
    <div>
      <img src={culturalFest} alt="Cultural Fest" />
      <p className="legend">Cultural Fest - Embracing Diversity and Creativity</p>
    </div>
  </Carousel>
);

export default CarouselComponent;
