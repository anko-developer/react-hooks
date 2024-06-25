import React from "react";
import TodoItem from "./TodoItem";

export default function Todo({ todos, onDelete }) {
  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
    </div>
  );
}
