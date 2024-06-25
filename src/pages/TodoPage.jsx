import React, { useEffect } from "react";
import AddTodo from "../components/AddTodo/AddTodo";
import Todo from "../components/Todo/Todo";
import useTodosStore from "../store/useTodosStore";

export default function TodoPage() {
  const { todos, addTodo, fetch } = useTodosStore();

  const handleClick = (form) => {
    addTodo(form);
  };

  useEffect(() => {
    fetch();
  }, [todos]);

  return (
    <>
      {todos && todos.map((todo) => <div key={todo.id}>{todo.memo}</div>)}
      <AddTodo onClick={handleClick} />
      <Todo todos={todos} />
    </>
  );
}
