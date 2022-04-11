import React, { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

import { Todo } from "../module";
import "./style.css";
interface TodoItem {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
interface Settings {
  edit: boolean;
}
const SingleTodo = ({ todo, todos, setTodos }: TodoItem) => {
  function handleDelete(id: string) {
    setTodos(todos.filter((e) => e.id !== id));
  }

  function handleDone(id: string) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }

  function handleEdit() {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  }
  function handleChangeTodo(e: React.FormEvent<EventTarget>, id: string) {
    e.preventDefault();
    setTodos(
      todos.map((e) => (e.id === id ? { ...todo, todo: editValue } : todo))
    );
    setEdit(false);
  }

  const [edit, setEdit] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(todo.todo);
  return (
    <form
      className="todos__single"
      onSubmit={(e) => handleChangeTodo(e, todo.id)}
    >
      {edit ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => {
            setEditValue(e.target.value);
          }}
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span className="icon" onClick={handleEdit}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
