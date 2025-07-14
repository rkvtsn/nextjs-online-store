import { useCallback, useState } from "react";

export const useToggle = (defaultState = true) => {
  const [state, setState] = useState(defaultState);

  const toggle = useCallback(() => {
    setState((state) => !state);
  }, []);

  const toggleTrue = useCallback(() => {
    setState(true);
  }, []);

  const toggleFalse = useCallback(() => {
    setState(false);
  }, []);

  return [state, setState, { toggle, toggleTrue, toggleFalse }] as const;
};
