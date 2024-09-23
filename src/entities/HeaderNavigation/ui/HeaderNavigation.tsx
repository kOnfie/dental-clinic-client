import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Navigation as NavigationData } from '../model/NavigationModel';

import s from './headerNavigation.module.scss';

const HeaderNavigation: FC = () => {
  return (
    <nav className={s.nav}>
      <ul>
        {NavigationData.map((item) => (
          <Link key={item.id} className={s.link} to={item.path}>
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
