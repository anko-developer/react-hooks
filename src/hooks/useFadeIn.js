import { useEffect, useRef } from "react";

const useFadeIn = (duration = 0, delay = 100) => {
  const ref = useRef();
  console.log("ref", ref);
  useEffect(() => {
    setTimeout(() => {
      const element = ref;
      if (element.current) {
        const { current } = element;
        current.style.transition = `opacity ${duration}s ease-in-out`;
        current.style.opacity = 1;
      }
    }, delay);
  }, []);

  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  return {
    ref,
    style: { opacity: 0 },
  };
};

export default useFadeIn;
