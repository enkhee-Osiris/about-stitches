import { useRef, useCallback, useEffect } from "react";

import useBroadcastChannel from "../../hooks/use-broadcast-channel";
import useMousetrap from "../../hooks/use-mousetrap";
import { KEYBOARD_SHORTCUTS, SPECTACLE_MODES, SpectacleMode } from "../../utils/constants";

import { DeckInternal, DeckInternalProps, DeckProps, DeckRef } from "./deck";

/**
 * Spectacle DefaultDeck is a wrapper around the Deck component that adds Broadcast channel support
 * for audience and presenter modes. This is intentionally not built into the base Deck component
 * to allow for extensibility outside of core Spectacle functionality.
 */
export default function DefaultDeck({
  overviewMode = false,
  printMode = false,
  exportMode = false,
  toggleMode,
  children,
  ...props
}: DefaultDeckProps) {
  const deck = useRef<DeckRef>(null);

  const [postMessage] = useBroadcastChannel("spectacle_presenter_bus", (message) => {
    if (message.type !== "SYNC") return;
    const nextView = message.payload;
    if (deck.current!.initialized) {
      deck.current!.skipTo(nextView);
    } else {
      deck.current!.initializeTo(nextView);
    }
  });

  useEffect(() => {
    postMessage("SYNC_REQUEST");
  }, [postMessage]);

  useMousetrap(
    overviewMode
      ? {
          [KEYBOARD_SHORTCUTS.TAB_FORWARD_OVERVIEW_MODE]: () => deck.current!.advanceSlide(),
          [KEYBOARD_SHORTCUTS.TAB_BACKWARD_OVERVIEW_MODE]: () =>
            deck.current!.regressSlide({
              stepIndex: 0,
            }),
          [KEYBOARD_SHORTCUTS.SELECT_SLIDE_OVERVIEW_MODE]: (e) =>
            toggleMode(e, SPECTACLE_MODES.DEFAULT_MODE),
        }
      : {},
    []
  );

  const onSlideClick: DeckInternalProps["onSlideClick"] = useCallback(
    (e, slideIndex) => {
      if (overviewMode) {
        toggleMode(e, SPECTACLE_MODES.DEFAULT_MODE, slideIndex);
      }
    },
    [overviewMode, toggleMode]
  );

  const onMobileSlide: DeckInternalProps["onMobileSlide"] = (e) => {
    if (navigator.maxTouchPoints < 1) return;
    switch (e.dir) {
      case "Left":
        deck.current!.stepForward();
        break;
      case "Right":
        deck.current!.regressSlide();
        break;
      default:
        break;
    }
  };

  return (
    <DeckInternal
      overviewMode={overviewMode}
      onSlideClick={onSlideClick}
      onMobileSlide={onMobileSlide}
      printMode={printMode}
      exportMode={exportMode}
      ref={deck}
      {...props}
    >
      {children}
    </DeckInternal>
  );
}

type DefaultDeckProps = DeckProps & {
  toggleMode(e: unknown, newMode: SpectacleMode, senderSlideIndex?: number): void;
  overviewMode?: boolean;
  printMode?: boolean;
  exportMode?: boolean;
};
