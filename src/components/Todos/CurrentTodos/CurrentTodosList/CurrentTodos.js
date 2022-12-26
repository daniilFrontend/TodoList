import React from 'react'
import { CurrentActions } from './CurrentActions'
import { CurrentList } from './CurrentList'
import {useSelector} from 'react-redux'

export const CurrentTodos = () => {



  const todos = useSelector(state => state.todos.todo)
  return (
    <>
        <CurrentActions />
        {todos.map((obj,i) => obj.status === "current" 
        ? <CurrentList key={obj.id} state = {obj} index ={i}/> 
        : "")}
    </>
  )
}
