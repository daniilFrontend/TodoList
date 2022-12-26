import React  from 'react'
import { AddTodoForm } from './AddTodoForm'
import s from "./Backdrop.module.css"

export const Backdrop =({onAddForm})=>{
  return(
    <div onClick={()=>onAddForm(false)} className={s.backdrop}></div>    
  )
}

export const AddTodoModal = ({onAddForm}) => {
  
  return (
    <>
    <AddTodoForm onAddForm={onAddForm}/>
    </>
  )
}
