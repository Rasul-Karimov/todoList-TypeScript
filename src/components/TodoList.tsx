import React from "react";
import { Todo } from "../module";
import SingleTodo from "./SingleTodo";
import "./style.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todo">
      {todos?.map((e) => (
        <SingleTodo key={e.id} todo={e} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
