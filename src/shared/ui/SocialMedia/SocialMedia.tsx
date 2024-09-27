import Icon from '../Icon/Icon';

import s from './socialMedia.module.scss';

const SocialMedia = () => {
  return (
    <div className={s.social}>
      <ul>
        <a href="#">
          <Icon name="instagram" />
          <p>@dental.clinic</p>
        </a>
        <a href="#">
          <Icon name="instagram" />
          <p>@dental.clinic</p>
        </a>
      </ul>
    </div>
  );
};

export default SocialMedia;
