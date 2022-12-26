import React from 'react'
import { CompletedList } from './CompletedList'
import { useSelector } from 'react-redux'

export const CompletedTodos = () => {

  const todos = useSelector(state => state.todos.todo)

  return (
    <>
        {todos.map((i, index)=> i.status === "completed" ? <CompletedList key={i.id} index ={index} state={i}/> : "")}
    </>
  )
}
