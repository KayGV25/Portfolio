import { useState, useEffect } from "react";

export function useIsVisible(ref, offset = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        {
          rootMargin: offset, // Apply the offset value here
        }
      );

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [ref, offset]);

  return isIntersecting;
}

export default useIsVisible;