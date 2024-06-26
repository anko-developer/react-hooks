const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disabledPrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disabledPrevent };
};

export default usePreventLeave;
