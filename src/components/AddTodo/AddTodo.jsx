import React from "react";
import useInputs from "../../hooks/useInputs";

export default function AddTodo({ onClick }) {
  const [form, onChange] = useInputs({});

  const handleClick = () => {
    onClick(form);
  };

  return (
    <header>
      <input type="text" name="memo" value={form.value} onChange={onChange} />
      <button onClick={handleClick}>메모 추가</button>
    </header>
  );
}
