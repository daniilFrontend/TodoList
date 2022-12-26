import React from 'react'
import "./ItemCard.css"
export const ItemCard = (props) => {
  //прокидывание стиля через пропсы в файл css. Идея было в том что засунуть в файл css разные стили 
  //для разных форм и по надобности прокидывать стиль пропсами, но в итоге отказался от этого, переделывать было
  //слишком муторно поэтому оставлено так! 
  return (
    <div className = {props.styles}  >{props.children}</div>
  )
}
