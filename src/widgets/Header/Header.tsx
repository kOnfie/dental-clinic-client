import { FC } from 'react';

import { HeaderNavigation } from 'src/entities';
import { Button, Logo } from 'src/shared/ui';

import s from './header.module.scss';

const Header: FC = () => {
  return (
    <header className={s.header}>
      <Logo />

      <HeaderNavigation />

      <Button className={s.header_button} type="button">
        +380(50)963-4476
      </Button>
    </header>
  );
};

export default Header;
