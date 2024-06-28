import { useEffect, useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    setState({
      x: window.scrollX,
      y: window.scrollY,
    });

    console.log("x", window.scrollX);
    console.log("y", window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
};

export default useScroll;
