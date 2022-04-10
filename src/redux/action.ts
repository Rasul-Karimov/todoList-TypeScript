import { Todo } from './../module';
export const addToTodo =(obj:Todo)=>({
    type: "ADD_TO_LIST",
    payload: obj
})