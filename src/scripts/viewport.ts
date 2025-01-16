import { useState, useEffect, RefObject } from "react";

function useIsInViewport(targetRef: RefObject<HTMLElement>): boolean {
  const [isInViewport, setIsInViewport] = useState<boolean>(false);

  useEffect(() => {
    const checkIsInViewport = () => {
      const element = targetRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= window.innerHeight &&
          rect.right <= window.innerWidth;
        setIsInViewport(isVisible);
      }
    };

    // Check on mount
    checkIsInViewport();

    // Check on scroll and resize
    window.addEventListener("scroll", checkIsInViewport);
    window.addEventListener("resize", checkIsInViewport);

    return () => {
      window.removeEventListener("scroll", checkIsInViewport);
      window.removeEventListener("resize", checkIsInViewport);
    };
  }, [targetRef]);

  return isInViewport;
}

export default useIsInViewport;
