import { useEffect } from "react";

import Mousetrap, { ExtendedKeyboardEvent } from "mousetrap";

/*
 * Hook for binding functions to keyboard bindings. Will throw an error if the
 * value of the keybind combination is not a function.
 */
export default function useMousetrap(
  keybinds: Record<string, (e?: ExtendedKeyboardEvent) => void>,
  deps: any[]
): void {
  useEffect(() => {
    Object.keys(keybinds).forEach((combo) => {
      const callback = keybinds[combo];
      if (typeof callback !== "function") {
        throw new TypeError(
          `Expected type 'function' in useMousetrap for combo '${combo}', but got ${typeof callback}`
        );
      }
      Mousetrap.bind(combo, callback);
    });

    return () => {
      Object.keys(keybinds).forEach((combo) => {
        Mousetrap.unbind(combo);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keybinds, ...deps]);
}
