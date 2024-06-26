import React from "react";
import TodoItem from "./TodoItem";

export default function Todo({ todos, onDelete }) {
  return (
    <div className="flex flex-col gap-[10px] px-3 mt-2">
      {todos &&
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
    </div>
  );
}
