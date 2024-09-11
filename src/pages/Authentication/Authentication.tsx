import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LinkButton from 'src/shared/ui/LinkButton/LinkButton';

import s from './authentication.module.scss';
import Icon from 'src/shared/ui/Icon/Icon';

const Authentication: FC = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('mode'));

  return (
    <main className={s.main}>
      <div className={s.info}>
        <div className={s.info_wrapper}>
          <Icon className={s['icon_black-star']} name="black-star" />
          <Icon className={s.icon_pasta} name="pasta" />
          <Icon className={s.icon_toothbrush} name="toothbrush" />
          <Icon className={s.icon_instrument} name="instrument" />

          <AnimatePresence>
            <motion.h1
              className={s.title}
              initial={'hidden'}
              animate={'visible'}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
              }}
            >
              You need to log in to use
            </motion.h1>
          </AnimatePresence>
          <LinkButton path="log-in">Log in</LinkButton>
        </div>
      </div>

      <motion.div
        className={s.image}
        initial={'hidden'}
        animate={'visible'}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } },
        }}
        whileHover={{ borderBottomRightRadius: 300 }}
      />
    </main>
  );
};

export default Authentication;
