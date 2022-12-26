import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteForever } from '../../../store/todoSlice'
import s from './DeletedActions.module.css'
export const DeletedActions = () => {

  const deleteIteems = useDispatch()
  const onDeleteForever = () =>{
    deleteIteems(deleteForever())
  }
  return (
    <>
    <button className={s.deleteAll} onClick={onDeleteForever}>Delete all</button>
    </>
  )
}
