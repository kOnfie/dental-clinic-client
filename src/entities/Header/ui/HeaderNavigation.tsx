import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Navigation as NavigationData } from '../model/NavigationModel';
import { Icon } from 'src/shared/ui';

import s from './headerNavigation.module.scss';

const HeaderNavigation: FC<{ isActiveMenu: boolean }> = ({ isActiveMenu }) => {
  return (
    <nav className={`${s.nav} ${isActiveMenu ? s.active : ''}`} data-testid="navigation">
      <Icon name="logoWhite" className={s.nav_logo} />

      <ul>
        {NavigationData.map((item) => (
          <NavLink
            key={item.id}
            className={({ isActive }) => `${isActive ? `${s.link} ${s.active}` : `${s.link}`}`}
            to={item.path}
          >
            {item.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
