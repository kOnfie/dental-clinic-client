import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch } from 'src/shared/hooks/reduxHook';
import { openModal } from 'src/app/store/modal/modalSlice';
import LinkButton from 'src/shared/ui/LinkButton/LinkButton';

import Icon from 'src/shared/ui/Icon/Icon';

import s from './start.module.scss';
import { useWindowDimensions } from 'src/shared/hooks/useWindowDimensions';

const Start = () => {
  const dispatch = useAppDispatch();
  const { width } = useWindowDimensions();

  const handleClickLink = () => {
    dispatch(openModal('signupModal'));
  };

  return (
    <div className={s.start}>
      <div className={s.info}>
        <div className={s.info_wrapper}>
          <Icon animation className={s['icon_black-star']} name="black-star" />
          <Icon animation className={s.icon_pasta} name="pasta" />
          <Icon animation className={s.icon_toothbrush} name="toothbrush" />
          <Icon animation className={s.icon_instrument} name="instrument" />

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

          <LinkButton onClick={handleClickLink} path="?mode=signup">
            Sign up
          </LinkButton>
        </div>
      </div>

      {width > 767.98 ? (
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
      ) : (
        <div className={s.image}></div>
      )}
    </div>
  );
};

export default Start;
