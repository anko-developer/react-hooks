const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm && typeof onConfirm !== "function") {
    return;
  }

  // option 이라 onConfirm과 다른 요청을 둠
  if (onCancel && typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

export default useConfirm;

// 실행
// const deleteWorld = () => console.log("Deleting the world!");
// const abort = () => console.log("Aborted");
// const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
