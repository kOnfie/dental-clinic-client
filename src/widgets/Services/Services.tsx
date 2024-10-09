import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/shared/hooks/reduxHook";

import { getServices } from "src/app/store/services/servicesSlice";
import { Service } from "src/shared/ui";

import s from "./services.module.scss";

const Services: FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.services.data);
  const errorMessage = useAppSelector((state) => state.services.errorMessage);
  const status = useAppSelector((state) => state.services.status);

  useEffect(() => {
    dispatch(getServices());
  }, []);

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

          {status === "loading" && (
            <p className={s["services_body-warning"]}>Loading...</p>
          )}
          {errorMessage && (
            <p className={s["services_body-warning"]}>{errorMessage}</p>
          )}

          <div className={s.services_items}>
            {data &&
              data.map((item) => (
                <Service
                  key={item._id}
                  path={item.path}
                  service={item.service}
                  description={item.description}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
