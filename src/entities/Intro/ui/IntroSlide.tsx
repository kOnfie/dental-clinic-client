import { FC } from "react";
import { Button } from "src/shared/ui";

import s from "./introSlide.module.scss";
import { Link } from "react-router-dom";

interface IntroSlideProps {
  title: string;
  btnText: string;
  typeSlide: "services" | "reviews" | "about-us";
}

const IntroSlide: FC<IntroSlideProps> = ({ title, btnText, typeSlide }) => {
  return (
    <div className={s.slide}>
      <div className={s.slide_container}>
        <div className={s.slide_body}>
          <div
            className={`${s.slide_img} ${
              typeSlide === "services" ? s.services : s.reviews
            } ${typeSlide === "about-us" ? s.about : ""}`}
          ></div>

          <div
            className={`${s.slide_info} ${
              typeSlide === "services" ? s.services : s.reviews
            }`}
          >
            <h2 className={s.slide_title}>{title}</h2>
            <Link to={typeSlide}>
              <Button className={s.slide_button}>{btnText}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSlide;
