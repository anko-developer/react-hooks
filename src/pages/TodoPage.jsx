import React, { useEffect } from "react";
import AddTodo from "../components/AddTodo/AddTodo";
import Todo from "../components/Todo/Todo";
import useTodosStore from "../store/useTodosStore";

export default function TodoPage() {
  const { todos, addTodo, deleteTodo, fetch } = useTodosStore();

  const handleClick = (form) => {
    addTodo(form);
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  useEffect(() => {
    fetch();
  }, [todos]);

  return (
    <>
      <AddTodo onClick={handleClick} />
      <Todo todos={todos} onDelete={handleDelete} />
    </>
  );
}
