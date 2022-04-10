import React from 'react';
import { useState } from 'react';

import './App.css';
import InputFieltd from './components/InputFieltd';
import { Todo } from './module';
import { useSelector } from 'react-redux';

const  App: React.FC =()=> {
  const [todo,setTodo]= useState<string>("")
  const todoList = useSelector(state=> state)
  console.log(todoList)
  return (
    <div className="App">
     <span className='heading'>Taskify</span>
     <InputFieltd todo={todo} setTodo={setTodo}/> 
      
    </div>
  );
}

export default App;
