// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import {Autoplay, Pagination} from 'swiper/modules';

interface Props {
  images: {
    url: string
  }[]
}

const SmallScreenGallery = ({images}: Props) => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="property-swiper"
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {images.map((image) => (<SwiperSlide key={image.url}>
        <img src={image.url} alt=""/>
      </SwiperSlide>))}

    </Swiper>
  );
};

export default SmallScreenGallery;