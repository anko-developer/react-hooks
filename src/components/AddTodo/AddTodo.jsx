import React from "react";
import useInputs from "../../hooks/useInputs";

export default function AddTodo({ onClick }) {
  const [form, onChange] = useInputs({});

  const handleClick = () => {
    onClick(form);
  };

  return (
    <header className="flex gap-[10px] p-2 bg-[skyblue]">
      <input
        type="text"
        name="memo"
        value={form.value}
        onChange={onChange}
        className="border"
      />
      <button
        onClick={handleClick}
        className="bg-black text-white px-2 py-1 text-xs"
      >
        메모 추가
      </button>
    </header>
  );
}
