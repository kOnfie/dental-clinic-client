import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Footer, Header } from 'src/widgets';

import s from './layout.module.scss';

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    } else {
      navigate('/authentication');
    }
  }, []);

  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
