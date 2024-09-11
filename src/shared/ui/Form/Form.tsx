import { FC, FormEvent } from 'react';
import { useAppDispatch } from 'src/shared/hooks/reduxHook';
import { openModal } from 'src/app/store/modal/modalSlice';

import { Link } from 'react-router-dom';

import s from './form.module.scss';

interface FormProps {
  typeForm: 'login' | 'signup';
}

const Form: FC<FormProps> = ({ typeForm }) => {
  const dispatch = useAppDispatch();

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
        <input placeholder="Name Lastname" type="text" name="text" required minLength={6} />
        <input placeholder="password..." type="password" name="password" required />
        <input placeholder="+380 (00) 000-00-00" type="phone" name="phone" required />
      </div>
    );
  }

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const fd = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(fd.entries());
    console.table(data);
  };

  const handleClickToLogin = () => {
    dispatch(openModal('loginModal'));
  };

  return (
    <form onSubmit={handleSubmitForm} className={s.form}>
      <h2>{typeForm === 'login' ? 'Log in' : 'Sign up'}</h2>
      {content}

      {typeForm === 'signup' && (
        <p className={s.link} onClick={handleClickToLogin}>
          have an account? <Link to="?mode=login">Log in</Link>
        </p>
      )}

      <div className={s.tabs}>
        <button className={s.tabs_submit} type="submit">
          {typeForm === 'login' ? 'Log in' : 'Sign up'}
        </button>
        <Link to="/authentication" className={s.tabs_cancel} type="button">
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default Form;
