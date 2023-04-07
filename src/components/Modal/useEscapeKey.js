import { useCallback, useEffect } from 'react';

const KEY_NAME_ESC = 'Escape';
const KEY_EVENT_TYPE = 'keyup';

export const useEscapeKey = handleCloseModal => {
  const handleEscapeKey = useCallback(
    e => {
      if (e.key === KEY_NAME_ESC) {
        handleCloseModal();
      }
    },
    [handleCloseModal],
  );

  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleEscapeKey, false);
    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleEscapeKey, false);
    };
  }, [handleEscapeKey]);
};
