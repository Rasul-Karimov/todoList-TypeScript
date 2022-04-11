import React, { FC } from "react";
import "./style.css";
import { Todo } from "../module";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent<EventTarget>) => void;
}
function InputFieltd({ todo, setTodo, handleAdd }: Props) {
  return (
    <div>
      <form className="input" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Enter a task"
          className="input__box"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="input__submit" type="submit">
          Go
        </button>
      </form>
    </div>
  );
}

export default InputFieltd;
