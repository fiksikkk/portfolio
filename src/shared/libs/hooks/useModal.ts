import { useEffect, useLayoutEffect, useRef } from "react";

interface UseModalParams {
  onClose: () => void;
}

export function useModal({ onClose }: UseModalParams) {
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useLayoutEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseRef.current();
      }
    };

    const { style } = document.body;
    const previousStyles = {
      overflow: style.overflow,
      position: style.position,
      top: style.top,
      left: style.left,
      right: style.right,
      width: style.width,
    };
    const scrollY = window.scrollY;
    const previousRootScrollBehavior = document.documentElement.style.scrollBehavior;

    style.overflow = "hidden";
    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";

    window.addEventListener("keydown", onKeyDown);

    return () => {
      style.overflow = previousStyles.overflow;
      style.position = previousStyles.position;
      style.top = previousStyles.top;
      style.left = previousStyles.left;
      style.right = previousStyles.right;
      style.width = previousStyles.width;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      document.documentElement.style.scrollBehavior = previousRootScrollBehavior;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);
}
