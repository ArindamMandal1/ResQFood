import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images }) => (
  <Carousel showThumbs={false} dynamicHeight>
    {images.map(img => <div key={img.public_id}><img src={img.url} alt="" /></div>)}
  </Carousel>
);

export default ImageCarousel;
