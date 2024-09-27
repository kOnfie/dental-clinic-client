import { MapComponent } from 'src/entities';
import SocialMedia from 'src/shared/ui/SocialMedia/SocialMedia';
import { Icon } from 'src/shared/ui';

import s from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer_wrapper}>
        <div className={s.footer_map}>
          <MapComponent />
        </div>

        <div className={s.footer_info}>
          <div className={s['footer_info-contacts']}>
            <p className={s['footer_info-title']}>Contacts:</p>
            <ul>
              <li>
                <Icon name="phone-icon" />
                <span>+380(50)963-4476</span>
              </li>
              <li>
                <Icon name="email-icon" />
                <span>dental.clinic@gmail.com</span>
              </li>
            </ul>
          </div>
          <SocialMedia />
        </div>
      </div>

      <div className={s.footer_copyright}>
        <Icon name="copyright-icon" />
        <p>2024. DENTAL CLINIC</p>
      </div>
    </footer>
  );
};

export default Footer;
