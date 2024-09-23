import { FC, FormEvent, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/shared/hooks/reduxHook';
import { openModal } from 'src/app/store/modal/modalSlice';
import { fetchUserData } from 'src/app/store/auth/authSlice';

import LoginInputs from '../LoginInputs/LoginInputs';
import SignupInputs from '../SignupInputs/SignupInputs';
import TabsForm from '../TabsForm/TabsForm';

import s from './form.module.scss';

export type UserDataType = {
  [key: string]: FormDataEntryValue;
};

const Form: FC<{ typeForm: 'login' | 'signup' }> = ({ typeForm }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authData = useAppSelector((state) => state.auth.data);
  const errorMessage = useAppSelector((state) => state.auth.errorMessage);

  useEffect(() => {
    if (authData) {
      navigate('/');
    }
  }, [authData, navigate]);

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fd = new FormData(e.target as HTMLFormElement);
    // перетворюємо масив на об'єкт властивостей
    const data = Object.fromEntries(fd.entries());

    if (typeForm === 'login') {
      const userData: UserDataType = {
        email: data.email,
        password: data.password,
      };

      dispatch(fetchUserData({ userData, type: 'login' }));
    } else {
      const userData: UserDataType = {
        email: data.email,
        fullName: data.fullName,
        password: data.password,
        phone: data.phone,
      };

      dispatch(fetchUserData({ userData, type: 'signup' }));
    }
  };

  let content;
  if (typeForm === 'login') {
    content = (
      <div className={s.inputs}>
        <LoginInputs />
      </div>
    );
  } else if (typeForm === 'signup') {
    content = (
      <div className={s.inputs}>
        <SignupInputs />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmitForm} className={s.form}>
      {errorMessage && <p>{errorMessage}</p>}
      <h2>{typeForm === 'login' ? 'Log in' : 'Sign up'}</h2>

      {content}

      {typeForm === 'signup' && (
        <p className={s.link} onClick={() => dispatch(openModal('loginModal'))}>
          have an account? <Link to="?mode=login">Log in</Link>
        </p>
      )}

      <TabsForm typeForm={typeForm} />
    </form>
  );
};

export default Form;
