import { FC } from "react";
import Icon from "../Icon/Icon";

import s from "./socialMedia.module.scss";

const SocialMedia: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${s.social} ${className}`}>
      <ul>
        <a href="#">
          <Icon name="instagram" />
          <p>@dental.clinic</p>
        </a>
        <a href="#">
          <Icon name="facebook" />
          <p>@dental.clinic</p>
        </a>
      </ul>
    </div>
  );
};

export default SocialMedia;
