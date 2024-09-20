import { FC } from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import s from './tabsForm.module.scss';

const TabsForm: FC<{ typeForm: string }> = ({ typeForm }) => {
  return (
    <div className={s.tabs}>
      <motion.button
        whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 400 } }}
        className={s.tabs_submit}
        type="submit"
      >
        {typeForm === 'login' ? 'Log in' : 'Sign up'}
      </motion.button>
      <Link to="/authentication" className={s.tabs_cancel} type="button">
        Cancel
      </Link>
    </div>
  );
};

export default TabsForm;
