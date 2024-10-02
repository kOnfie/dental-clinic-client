import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import IntroSlide from "src/entities/Intro/ui/IntroSlide";

import "swiper/css";
import "swiper/css/navigation";

import "./introSwiper.scss";
import s from "./intro.module.scss";

const Intro = () => {
  return (
    <section className={s.intro}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <IntroSlide
            typeSlide="about-us"
            title="Our doctors are professionals"
            btnText="About us"
          />
        </SwiperSlide>

        <SwiperSlide>
          <IntroSlide
            typeSlide="services"
            title="We use only modern medicine"
            btnText="Services"
          />
        </SwiperSlide>

        <SwiperSlide>
          <IntroSlide
            typeSlide="reviews"
            title="Our patients are always satisfied"
            btnText="Reviews"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Intro;
