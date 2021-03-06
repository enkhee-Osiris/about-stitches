import { useRef, useState, useCallback, useEffect } from "react";

import { CSSObject } from "styled-components";
import useResizeObserver from "use-resize-observer";

// Returns an offset and scaling factor which, when applied to `element`, will
// make it properly fit into `container` at the given aspect ratio.
export default function useAspectRatioFitting({ targetWidth = 1366, targetHeight = 768 }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scaleFactor, setScaleFactor] = useState(1);
  const [transformOrigin, setTransformOrigin] = useState({ x: 0, y: 0 });

  const recalculate = useCallback(
    ({ width: containerWidth, height: containerHeight }) => {
      const containerRatio = containerWidth / containerHeight;
      const targetRatio = targetWidth / targetHeight;
      const useVertical = containerRatio > targetRatio;

      const scaleFactorTemp = useVertical
        ? containerHeight / targetHeight
        : containerWidth / targetWidth;

      const scaledWidth = targetWidth * scaleFactorTemp;
      const scaledHeight = targetHeight * scaleFactorTemp;

      let x0 = 0;
      if (useVertical) {
        x0 = 0.5 * (containerWidth - scaledWidth);
        x0 /= 1 - scaleFactorTemp;
      }

      let y0 = 0;
      if (!useVertical) {
        y0 = 0.5 * (containerHeight - scaledHeight);
        y0 /= 1 - scaleFactorTemp;
      }

      setScaleFactor(scaleFactorTemp);
      setTransformOrigin({ x: x0, y: y0 });
    },
    [targetWidth, targetHeight]
  );

  // recalculate sizes on the initial pass, and each time the target size
  // changes. (our measurements aren't as accurate as `useResizeObserver`, but
  // we only need to get them close because it'll do them again anyways.)
  useEffect(() => {
    if (!containerRef || !containerRef.current) return;
    const rects = containerRef.current.getClientRects();
    recalculate(rects[0]);
  }, [targetWidth, targetHeight, recalculate]);

  useResizeObserver({
    ref: containerRef,
    onResize: recalculate,
  });

  const styles: CSSObject = {
    position: "relative",
    width: targetWidth,
    height: targetHeight,
    scaleFactor,
    transform: `scale(${scaleFactor})`,
    transformOrigin: `${transformOrigin.x}px ${transformOrigin.y}px`,
  };

  return [containerRef, styles] as const;
}
