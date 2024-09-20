import { FC } from 'react';

const LoginInputs: FC = () => {
  return (
    <>
      <input placeholder="email.example@gmail.com" type="email" name="email" required />
      <input placeholder="password..." type="password" name="password" required minLength={6} />
    </>
  );
};

export default LoginInputs;
