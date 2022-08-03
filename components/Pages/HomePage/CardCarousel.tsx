import { Carousel } from 'react-responsive-carousel';

import Blog from './Cards/Blog';
import NowPlaying from './Cards/NowPlaying';
import Resume from './Cards/Resume';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CardCarousel = () => (
  <Carousel
    showThumbs={false}
    showIndicators={false}
    showStatus={false}
    autoPlay
    interval={2000}
    infiniteLoop
    stopOnHover
    emulateTouch
  >
    <Resume />
    <Blog />
    <NowPlaying />
  </Carousel>
);

export default CardCarousel;
