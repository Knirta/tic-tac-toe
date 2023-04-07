import { useCallback, useEffect } from 'react';

const MOUSE_UP = 'mouseup';

export const useClickOutside = (handleCloseModal, ref) => {
  const handleClick = useCallback(
    e => {
      if (ref?.current?.contains && !ref.current.contains(e.target)) {
        handleCloseModal();
      }
    },
    [handleCloseModal, ref],
  );

  useEffect(() => {
    document.addEventListener(MOUSE_UP, handleClick, false);
    return () => {
      document.removeEventListener(MOUSE_UP, handleClick, false);
    };
  }, [handleClick]);
};
