import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Start } from '..';
import Modal from 'src/shared/ui/Modal/Modal';

import s from './authentication.module.scss';
import { Form } from 'src/shared/ui';
import { useAppSelector } from 'src/shared/hooks/reduxHook';

const Authentication: FC = () => {
  const [searchParams] = useSearchParams();
  const typeMode = searchParams.get('mode') || 'start';
  const loginModal = useAppSelector((state) => state.modal.loginModal);
  const signupModal = useAppSelector((state) => state.modal.signupModal);

  return (
    <main className={s.main}>
      <Start />
      <AnimatePresence>
        {loginModal && typeMode === 'login' && (
          <Modal modalId="loginModal">
            <Form typeForm="login" />
          </Modal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {signupModal && typeMode === 'signup' && (
          <Modal modalId="signupModal">
            <Form typeForm="signup" />
          </Modal>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Authentication;
