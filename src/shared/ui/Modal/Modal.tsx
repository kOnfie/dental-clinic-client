import { FC, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

import { useAppDispatch } from 'src/shared/hooks/reduxHook';

import s from './modal.module.scss';
import { closeModal } from 'src/app/store/modal/modalSlice';
// import { useWindowDimensions } from 'src/shared/hooks/useWindowDimensions';

interface ModalProps {
  title?: string;
  children: ReactNode;
  modalId: string;
}

const Modal: FC<ModalProps> = ({ title, children, modalId }) => {
  const modal = document.getElementById('modal');
  const dispatch = useAppDispatch();
  // const { width } = useWindowDimensions();

  useEffect(() => {
    const handleKeyEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(closeModal(modalId));
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyEscape);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyEscape);
    };
  }, [dispatch, modalId]);

  return (
    modal &&
    createPortal(
      <div role="dialog" aria-label="modal" aria-modal="true" className={s.modal}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } }}
          exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
          className={s.modal_wrapper}
        >
          {title && <h2 className={s.modal_title}>{title}</h2>}
          <div className={s.modal_content}>{children}</div>
        </motion.div>
      </div>,
      modal
    )
  );
};

export default Modal;
