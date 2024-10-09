import { useNavigate } from "react-router-dom";

import { Button, SocialMedia } from "src/shared/ui";

import s from "./schedule.module.scss";

const Schedule = () => {
  const navigate = useNavigate();
  return (
    <section className={s.schedule}>
      <div className={s.schedule_container}>
        <div className={s.schedule_img}>
          <p>We work from 9:00 to 18:00</p>
        </div>

        <div className={s.schedule_body}>
          <h2>Schedule</h2>

          <ul className={s["schedule_body-list"]}>
            <li>
              <p className={s["schedule_body-list-days"]}>Mon - Fri</p>
              <p className={s["schedule_body-list-times"]}>9:00 - 18:00</p>
            </li>
            <li>
              <p className={s["schedule_body-list-days"]}>Sat - Sun</p>
              <p className={s["schedule_body-list-times"]}>10:00 - 15:00</p>
            </li>
          </ul>

          <Button
            handleClickButton={() => navigate("/consultation")}
            className={s["schedule_body-btn"]}
          >
            Consultation
          </Button>

          <SocialMedia className={s["schedule_body-media"]} />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
