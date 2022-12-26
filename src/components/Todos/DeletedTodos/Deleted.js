import React from 'react'
import { useDispatch } from 'react-redux'
import { backToCurrent } from '../../../store/todoSlice'
import { ItemCard } from '../../../UI/ItemCard/ItemCard'
import s from "./Deleted.module.css"

export const Deleted = ({state, index}) => {
    const backToWork = useDispatch()

   const onBackToCurrent = () =>{
      backToWork(backToCurrent(
        {index}
      ))
    }

  return (
    <ItemCard styles = "deleted-container">
        <div>
            <div className={s.todoName}>{state.header}</div>
            <div className={s.todoText}>{state.text}</div>
        </div>
        <div >
            <button className={s.backButton} onClick={()=>onBackToCurrent()}></button>
        </div>
    </ItemCard>
  )
}
