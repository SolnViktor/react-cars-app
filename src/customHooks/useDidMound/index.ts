import { useEffect, useRef } from 'react';

export const useDidMound = (callback: () => any, deps: any[]) => {
  const isMounted = useRef(false);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      callback();
    }
  }, deps);
};
