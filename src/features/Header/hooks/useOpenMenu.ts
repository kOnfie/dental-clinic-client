import { useState, useEffect } from 'react';

export const useOpenMenu = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isActive]);

  return { isActive, toggleMenu };
};
