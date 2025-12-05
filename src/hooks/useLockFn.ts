import { useCallback, useRef } from "react";

export const useLockFn = <P extends unknown[] = unknown[], V = unknown>(fn: (...args: P) => Promise<V>) => {
  const lockRef = useRef(false);

  return useCallback(
    async (...args: P) => {
      if (lockRef.current) return;

      lockRef.current = true;
      try {
        const res = await fn(...args);
        lockRef.current = false;
        return res;
      } catch (e) {
        lockRef.current = false;
        throw e;
      }
    },
    [fn]
  );
};
