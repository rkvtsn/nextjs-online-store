import { RefObject, useEffect, useRef } from "react";

const DEFAULT_EVENTS: (keyof DocumentEventMap)[] = ["mousedown", "touchstart"];

export const useClickOutside = <E extends Event = Event>(
  onClick: (event: E) => void,
  ref: RefObject<HTMLElement | null>,
  events: (keyof DocumentEventMap)[] = DEFAULT_EVENTS
) => {
  const refOnClick = useRef(onClick);

  useEffect(() => {
    refOnClick.current = onClick;
  }, [onClick]);

  useEffect(() => {
    const callback = (e: Event) => {
      const el = ref.current;

      if (el && e && !el.contains(e.target as Node)) {
        refOnClick.current(e as E);
      }
    };

    for (const event of events) {
      document.addEventListener(event, callback);
    }
    return () => {
      for (const event of events) {
        document.removeEventListener(event, callback);
      }
    };
  }, [ref, events]);
};
