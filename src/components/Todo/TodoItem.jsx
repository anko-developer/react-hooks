import React from "react";

export default function TodoItem({ todo, onDelete }) {
  const { memo, id } = todo;
  return (
    <div>
      <p>{memo}</p>
      <button onClick={() => onDelete(id)}>삭제</button>
    </div>
  );
}
