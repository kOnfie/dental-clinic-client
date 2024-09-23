import { Link } from 'react-router-dom';

import Icon from '../Icon/Icon';

import s from './logo.module.scss';

const Logo = () => {
  return (
    <Link to="/" className={s.link}>
      <Icon name="logo" />
    </Link>
  );
};

export default Logo;
