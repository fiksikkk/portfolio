import { useEffect, useState } from "react";
import { Colors } from "shared/styles/colors";

const HALF_SCROLL_PROGRESS = 0.5;
const HEADER_SCROLL_THRESHOLD = 20;

const getScrollProgress = () => {
  const documentElement = document.documentElement;
  const scrollableHeight = documentElement.scrollHeight - window.innerHeight;

  if (scrollableHeight <= 0) {
    return 0;
  }

  return window.scrollY / scrollableHeight;
};

const hasPassedHalfPage = () => {
  return getScrollProgress() >= HALF_SCROLL_PROGRESS;
};

const setOverscrollBackground = (passedHalfPage: boolean) => {
  const overscrollColor = passedHalfPage ? Colors.surface : Colors.base;
  document.documentElement.style.setProperty("--overscroll-bg", overscrollColor);
};

export const useScrollEffects = () => {
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState<string>(
    Colors.transparent
  );

  useEffect(() => {
    const updateScrollState = () => {
      const nextHeaderBackgroundColor =
        window.scrollY > HEADER_SCROLL_THRESHOLD
          ? Colors.surfaceTint80
          : Colors.transparent;

      setHeaderBackgroundColor(nextHeaderBackgroundColor);
      setOverscrollBackground(hasPassedHalfPage());
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return { headerBackgroundColor };
};
