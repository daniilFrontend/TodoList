import React from 'react'
import s from "./ActionButton.module.css"

export const ActionButton = (props) => {
  return (
    <button onClick={props.onClick} className={s.actionButton}>{props.children}</button>
  )
}
