import { Form } from 'src/shared/ui';

import s from './login.module.scss';

const Login = () => {
  return (
    <main className={s.login}>
      <div className={s.login_body}>
        <Form typeForm="login" />
      </div>
    </main>
  );
};

export default Login;
