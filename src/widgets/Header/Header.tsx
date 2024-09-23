import { FC } from 'react';

import { HeaderNavigation } from 'src/entities';
import { Button, Logo } from 'src/shared/ui';

import s from './header.module.scss';
import { makePhoneCall } from 'src/features/Header/utilities/makePhoneCall';
import { useOpenMenu } from 'src/features/Header/hooks/useOpenMenu';

const Header: FC = () => {
  const { isActive, toggleMenu } = useOpenMenu();

  return (
    <header className={s.header}>
      <div className={s.header_wrapper}>
        <Logo />

        <HeaderNavigation isActiveMenu={isActive} />

        <div className={s.header_actions}>
          <Button
            handleClickButton={() => makePhoneCall('+380509634476')}
            className={s.header_button}
            type="button"
          >
            +380(50)963-4476
          </Button>

          <button
            onClick={() => toggleMenu()}
            className={`${s.header_menu} ${isActive ? s.active : ''}`}
          >
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
