import React from 'react'
import s from "./HeaderButtons.module.css"

export const HeaderButtons = (props) => {
  return (
    <div className={s.headerButton}>{props.children}</div>
  )
}
