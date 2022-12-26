import React from "react";
import { Deleted } from "./Deleted";
import { DeletedActions } from "./DeletedActions";
import {useSelector} from 'react-redux'

export const DeletedTodos = () => {
  
  const todos = useSelector(state => state.todos.todo)
  return (
    <>
      <DeletedActions />
      {todos.map((obj,index)=> obj.status === "deleted" ? <Deleted key={obj.id} state ={obj} index={index}/> : "")}
    </>
  );
};
