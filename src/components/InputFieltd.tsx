import React, { FC } from 'react'
import "./style.css"
import {Todo} from "../module"
import { addToTodo } from '../redux/action'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';
interface Props{
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>
}
function InputFieltd({todo,setTodo,}:Props) {

    const dispatch = useDispatch();

    

  const handleAdd = (e:  React.FormEvent<EventTarget>,)=>{
      e.preventDefault();
      const id: string = uuid()
      dispatch(addToTodo({todo:todo,id: id, isDone: false}))
      setTodo("");
  }
  return (                                                                                                                                                                                       
    <div>
     <form  className='input'  onSubmit={handleAdd}>
         <input 
         type="text"
          placeholder='Enter a task' 
          className="input__box" 
          value={todo}
           onChange={(e)=>setTodo(e.target.value)} />
         <button className='input__submit' type='submit' >Go</button>
     </form>
    </div>
  )
}
 
export default InputFieltd