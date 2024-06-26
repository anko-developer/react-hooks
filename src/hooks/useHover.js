import { useEffect, useRef } from "react";

const useHover = (onHover) => {
  const ref = useRef();
  useEffect(() => {
    const element = ref;

    // componentDidMount 되었을 때 event 추가
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }

    // componentWillUnMont 일 때 return 실행
    // component가 mount되지 않았을 때 eventListener가 배치되게 하고 싶지 않아서 추가
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, [onHover]);

  if (typeof onHover !== "function") {
    return;
  }
  return ref;
};

export default useHover;

// 실행
// const sayHello = () => console.log("say hello");
// const title = useHover(sayHello);
// <div ref={title}></div>
