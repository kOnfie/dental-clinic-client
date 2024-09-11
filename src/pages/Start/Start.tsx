import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch } from 'src/shared/hooks/reduxHook';
import { openModal } from 'src/app/store/modal/modalSlice';
import LinkButton from 'src/shared/ui/LinkButton/LinkButton';

import Icon from 'src/shared/ui/Icon/Icon';

import s from './start.module.scss';
import { useWindowDimensions } from 'src/shared/hooks/useWindowDimensions';

// <<<<<<<<<<<<<<  ✨ Codeium Command 🌟  >>>>>>>>>>>>>>>>
/**
 * The component of the start page.
 *
 * The component displays the start page with a title, a link to the sign up page,
 * and a background image.
 *
//  * @return {React.ReactElement} The component of the start page.
 */
const Start = () => {
  const dispatch = useAppDispatch();
  const { width } = useWindowDimensions();

  /**
   * Handles the click on the link to the sign up page.
   */
  const handleClickLink = () => {
    dispatch(openModal('signupModal'));
  };

  return (
    <div className={s.start}>
      <div className={s.info}>
        <div className={s.info_wrapper}>
          {/* The icons of the start page. */}
          <Icon className={s['icon_black-star']} name="black-star" />
          <Icon className={s.icon_pasta} name="pasta" />
          <Icon className={s.icon_toothbrush} name="toothbrush" />
          <Icon className={s.icon_instrument} name="instrument" />

          {/* The title of the start page with animation. */}
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

          {/* The link to the sign up page. */}
          <LinkButton onClick={handleClickLink} path="?mode=signup">
            Sign up
          </LinkButton>
        </div>
      </div>

      {/* The background image of the start page. */}
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
// <<<<<<<  71ac61c3-37f6-4e31-9f4c-0cbddb573642  >>>>>>>

export default Start;
