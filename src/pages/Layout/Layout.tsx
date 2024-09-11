import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  navigate('/authentication');

  return <Outlet />;
};

export default Layout;
