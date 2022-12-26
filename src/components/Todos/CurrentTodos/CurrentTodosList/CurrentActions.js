import { useState } from "react";
import { AddTodoModal, Backdrop} from "../AddTodoForm/AddTodoModal"
import { useDispatch } from "react-redux";
import {sendCompleted} from "../../../../store/todoSlice"
import s from "./CurrentActions.module.css";
import { ActionButton } from "../../../../UI/ActionButton/ActionButton";

export const CurrentActions = () => {
  const [addForm, setAddForm] = useState(false)

  const throwCompleted = useDispatch()
  
  const sendCompletedTodos = () =>{
    throwCompleted(sendCompleted())
  }

  const onAddForm = (e,value) =>{
    setAddForm(value)
  }

  return (
    <div className={s.addTodoForm}>
      
      {addForm ?<AddTodoModal  onAddForm={onAddForm} /> : ""}
      {addForm ? <Backdrop onAddForm={onAddForm}></Backdrop> : ""}
      <div className={s.buttonContainer}>
          <ActionButton onClick={(e)=>onAddForm(e,true)}>ADD TODO</ActionButton>
        <ActionButton onClick={sendCompletedTodos}>SEND COMPLETED</ActionButton>
      </div>
    </div>
  );
};
