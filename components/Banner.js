import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



function Banner() {
  return (
    <div className="relative">
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-200 to-transparent z-20 bottom-0">

        </div>
        <Carousel 
         autoPlay
         interval={4000}
        infiniteLoop
         showIndicators={false} 
         showStatus={false}
         showThumbs={false}
         >
        <div>
            <img loading="lazy" src="../deal.jpg" alt="/" />
        </div>
        <div>
        <img loading="lazy" src="../jump.jpg" alt="/" />
        </div>
        <div>
        <img loading="lazy" src="../71qid7QFWJL._SX3000_.jpg" alt="/" />
        </div>
        </Carousel>
    </div>
  )
}

export default Banner