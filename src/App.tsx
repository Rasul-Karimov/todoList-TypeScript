import React from 'react';
import { useState } from 'react';

import './App.css';
import InputFieltd from './components/InputFieltd';
import { useSelector } from 'react-redux';
import TodoList from './components/TodoList';

const  App: React.FC =()=> {
  const [todo,setTodo]= useState<string>("")




  const todoList = useSelector((state)=> state)
  return (
    <div className="App">
     <span className='heading'>Taskify</span>
     <InputFieltd todo={todo} setTodo={setTodo}/> 
      <TodoList todos={Object.values(todoList)} setTodos={setTodo}/>
    </div>
  );
}

export default App;
