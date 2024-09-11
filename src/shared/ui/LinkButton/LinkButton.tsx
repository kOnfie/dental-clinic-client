import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import s from './linkButton.module.scss';

interface LinkButtonProps {
  path: string;
  children: ReactNode;
  onClick: () => void;
}

const LinkButton: FC<LinkButtonProps> = ({ path, children, onClick }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    onClick();
    navigate(path);
  };

  return (
    <motion.button
      initial={'hidden'}
      animate={'visible'}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
      }}
      whileHover={{ scale: 1.1 }}
      transition={{
        type: 'spring',
        stiffness: 400,
      }}
      type="button"
      className={s.link}
      onClick={handleButtonClick}
    >
      {children}
    </motion.button>
  );
};

export default LinkButton;
