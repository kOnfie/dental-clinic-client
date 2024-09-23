import { FC, ReactNode } from 'react';

import { motion } from 'framer-motion';

import s from './button.module.scss';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  handleClickButton?: () => void;
}

const Button: FC<ButtonProps> = ({ className, children, type = 'submit', handleClickButton }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 400 } }}
      className={`${s.button} ${className}`}
      type={type}
      onClick={handleClickButton}
    >
      {children}
    </motion.button>
  );
};

export default Button;
