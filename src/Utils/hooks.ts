import { RefObject, useEffect, useState } from 'react';

export const useOnScreen = (
  ref: RefObject<HTMLElement>,
  rootMargin = '0px'
) => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );
    if (element) {
      observer.observe(element);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
};
