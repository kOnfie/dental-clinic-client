import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import IntroSlide from 'src/entities/Intro/ui/IntroSlide';

import 'swiper/css';
import 'swiper/css/navigation';

import './introSwiper.scss';
import s from './intro.module.scss';

const Intro = () => {
  return (
    <section className={s.intro}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <IntroSlide />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Intro;
