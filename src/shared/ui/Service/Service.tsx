import { FC } from "react";
import { Link } from "react-router-dom";

import s from "./service.module.scss";

interface ServiceProps {
  description: string;
  service: string;
  path: string;
}

const Service: FC<ServiceProps> = ({ service, description, path }) => {
  return (
    <div className={s.service}>
      <div>
        <h4 className={s.service_title}>{service}</h4>
        <p>{description}</p>
      </div>

      <Link to={path} className={s.service_link}>
        + more details
      </Link>
    </div>
  );
};

export default Service;
