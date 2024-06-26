import React from "react";

export default function TodoItem({ todo, onDelete }) {
  const { memo, id } = todo;
  return (
    <div className="flex gap-2 border p-2">
      <p>{memo}</p>
      <button
        onClick={() => onDelete(id)}
        className="bg-black text-white px-2 py-1 text-xs"
      >
        삭제
      </button>
    </div>
  );
}
