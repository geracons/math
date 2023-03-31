// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      modules={[EffectFade]} 
      effect="fade"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='text-pink text-7xl '> Matemática</SwiperSlide>
      <SwiperSlide className='text-pink text-7xl'>Estadística</SwiperSlide>
      <SwiperSlide className='text-pink text-7xl'>Cálculo</SwiperSlide>
      <SwiperSlide className='text-pink text-7xl'>Álgebra</SwiperSlide>
      
    </Swiper>
  );
};
