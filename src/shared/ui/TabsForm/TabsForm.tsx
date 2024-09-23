import { FC } from 'react';

import { Link } from 'react-router-dom';
import Button from '../Button/Button';

import s from './tabsForm.module.scss';

const TabsForm: FC<{ typeForm: string }> = ({ typeForm }) => {
  return (
    <div className={s.tabs}>
      <Button className={s.tabs_submit}>{typeForm === 'login' ? 'Log in' : 'Sign up'}</Button>

      <Link to="/authentication" className={s.tabs_cancel} type="button">
        Cancel
      </Link>
    </div>
  );
};

export default TabsForm;
