import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

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
      <h1>Layout</h1>
      <Outlet />
    </>
  );
};

export default Layout;
