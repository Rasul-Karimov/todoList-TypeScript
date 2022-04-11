import React from 'react'
import { Todo } from '../module'
import "./style.css"

interface Props{
    todos: Todo[],
    setTodos:React.Dispatch<React.SetStateAction<string>>
}

const TodoList= ({todos,setTodos}: Props) => {
  return (
    <div className='todo'>
 {
     todos?.map(e=>(
         <li>{e.todo}</li>
     ))
 }
    </div>
  )
}

export default TodoList