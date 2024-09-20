import { FC } from 'react';

const SignupInputs: FC = () => {
  return (
    <>
      <input placeholder="email.example@gmail.com" type="email" name="email" required />
      <input placeholder="Name Lastname" type="text" name="fullName" required minLength={6} />
      <input placeholder="password..." type="password" name="password" required />
      <input placeholder="+380 (00) 000-00-00" type="phone" name="phone" required />
    </>
  );
};

export default SignupInputs;
