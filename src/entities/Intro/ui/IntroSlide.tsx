import { Button } from 'src/shared/ui';

import s from './introSlide.module.scss';

const IntroSlide = () => {
  return (
    <div className={s.slide}>
      <div className={s.slide_container}>
        <div className={s.slide_img}></div>
        <div className={s.slide_info}>
          <h2 className={s.slide_title}>We use only modern medicine</h2>
          <Button className={s.slide_button}>Services</Button>
        </div>
      </div>
    </div>
  );
};

export default IntroSlide;
