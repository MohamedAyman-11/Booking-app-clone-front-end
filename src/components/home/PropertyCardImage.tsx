import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {Box} from "@mui/material";

interface Props {
  images: {
    url: string,
    public_id?: string
  }[]
}

const PropertyCardImage = ({images}: Props) => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((img, i) =>
        <SwiperSlide key={i}>
          <Box sx={{
            aspectRatio: 5 / 4
          }}>
            <Box component={'img'}
                 src={img.url}
                 sx={{
                   height: '100%',
                   width: '100%',
                   objectFit: 'cover'
                 }}
                 alt={'Property Image'}
            />
          </Box>
        </SwiperSlide>)}
    </Swiper>
  );
};

export default PropertyCardImage;
