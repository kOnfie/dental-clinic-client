import { motion } from "framer-motion";

import sprite from "src/../public/sprite.svg";
import s from "./icon.module.scss";

interface IconProps {
  name: string;
  className?: string;
  animation?: boolean;
}

const Icon = ({ name, className, animation = false }: IconProps) => {
  return (
    <>
      {!animation ? (
        <svg className={`${s.icon} ${s.logo} ${className}`} data-testid="icon">
          <use href={`${sprite}#${name}`} />
        </svg>
      ) : (
        <motion.svg
          data-testid="icon"
          initial={"hidden"}
          animate={"visible"}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, delay: 0.2 },
            },
          }}
          className={`${s.icon} ${className}`}
        >
          <use href={`${sprite}#${name}`} />
        </motion.svg>
      )}
    </>
  );
};

export default Icon;
