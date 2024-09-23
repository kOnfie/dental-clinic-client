import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from 'src/widgets/Header/Header';

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
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
