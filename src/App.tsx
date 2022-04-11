import React from "react";
import { useState } from "react";

import "./App.css";
import InputFieltd from "./components/InputFieltd";
import TodoList from "./components/TodoList";
import { Todo } from "./module";
import { v4 as uuid } from "uuid";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const id: string = uuid();
    setTodos([...todos, { id: id, isDone: false, todo: todo }]);
    setTodo("");
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFieltd todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
