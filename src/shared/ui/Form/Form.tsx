import { FC, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/shared/hooks/reduxHook';
import { openModal } from 'src/app/store/modal/modalSlice';
import { fetchUserData } from 'src/app/store/auth/authSlice';

import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

import s from './form.module.scss';

interface FormProps {
  typeForm: 'login' | 'signup';
}

const Form: FC<FormProps> = ({ typeForm }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authData = useAppSelector((state) => state.auth.data);
  const errorMessage = useAppSelector((state) => state.auth.errorMessage);
  console.log(errorMessage);

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fd = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(fd.entries());

    if (typeForm === 'login') {
      const userData: { [key: string]: FormDataEntryValue } = {
        email: data.email,
        password: data.password,
      };

      dispatch(fetchUserData({ userData, type: 'login' }));
    } else {
      const userData: { [key: string]: FormDataEntryValue } = {
        email: data.email,
        fullName: data.fullName,
        password: data.password,
        phone: data.phone,
      };

      dispatch(fetchUserData({ userData, type: 'signup' }));
    }
  };

  useEffect(() => {
    if (authData) {
      navigate('/');
    }
  }, [authData, navigate]);

  let content;
  if (typeForm === 'login') {
    content = (
      <div className={s.inputs}>
        <input placeholder="email.example@gmail.com" type="email" name="email" required />
        <input placeholder="password..." type="password" name="password" required minLength={6} />
      </div>
    );
  } else if (typeForm === 'signup') {
    content = (
      <div className={s.inputs}>
        <input placeholder="email.example@gmail.com" type="email" name="email" required />
        <input placeholder="Name Lastname" type="text" name="fullName" required minLength={6} />
        <input placeholder="password..." type="password" name="password" required />
        <input placeholder="+380 (00) 000-00-00" type="phone" name="phone" required />
      </div>
    );
  }

  const handleClickToLogin = () => {
    dispatch(openModal('loginModal'));
  };

  return (
    <form onSubmit={handleSubmitForm} className={s.form}>
      {errorMessage && <p>{errorMessage}</p>}
      <h2>{typeForm === 'login' ? 'Log in' : 'Sign up'}</h2>
      {content}

      {typeForm === 'signup' && (
        <p className={s.link} onClick={handleClickToLogin}>
          have an account? <Link to="?mode=login">Log in</Link>
        </p>
      )}

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
    </form>
  );
};

export default Form;
