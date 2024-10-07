import { Service } from "src/shared/ui";
import s from "./services.module.scss";

const Services = () => {
  return (
    <section className={s.services}>
      <div className={s.services_container}>
        <div className={s.services_body}>
          <h2 className={s["services_body-title"]}>
            Services offered by our clinic
          </h2>
          <p className={s["services_body-text"]}>
            The dental clinic has a wide range of services that you can use to
            get a beautiful smile
          </p>

          <div className={s.services_items}>
            <Service
              path="/"
              service="Cosmetic dentistry"
              description="Cosmetic dentistry deals with the appearance of teeth and improving a person's smile"
            />
            <Service
              path="/"
              service="Cosmetic dentistry"
              description="Cosmetic dentistry deals with the appearance of teeth and improving a person's smile"
            />
            <Service
              path="/"
              service="Cosmetic dentistry"
              description="Cosmetic dentistry deals with the appearance of teeth and improving a person's smile"
            />
            <Service
              path="/"
              service="Cosmetic dentistry"
              description="Cosmetic dentistry deals with the appearance of teeth and improving a person's smile"
            />
            <Service
              path="/"
              service="Cosmetic dentistry"
              description="Cosmetic dentistry deals with the appearance of teeth and improving a person's smile"
            />
            <Service
              path="/"
              service="Cosmetic dentistry"
              description="Cosmetic dentistry deals with the appearance of teeth and improving a person's smile"
            />
            <Service
              path="/"
              service="Cosmetic dentistry"
              description="Cosmetic dentistry deals with the appearance of teeth and improving a person's smile"
            />
            <Service
              path="/"
              service="Cosmetic dentistry"
              description="Cosmetic dentistry deals with the appearance of teeth and improving a person's smile"
            />
            <Service
              path="/"
              service="Cosmetic dentistry"
              description="Cosmetic dentistry deals with the appearance of teeth and improving a person's smile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
