import React from 'react'
import s from "./Card.module.css"
export const Card = (props) => {
  return (
    <div className={s.container}>{props.children}</div>
  )
}