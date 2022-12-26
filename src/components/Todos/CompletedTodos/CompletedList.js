import React from "react";
import s from "./CompletedList.module.css";
import { useDispatch } from "react-redux";
import { backToCurrent } from "../../../store/todoSlice";
export const CompletedList = ({ state, index }) => {
  const backToWork = useDispatch();
// возврат в роботу
  const onBackToCurrent = () => {
    backToWork(backToCurrent({ index }));
    console.log(index);
  };
  return (
    <div className={s.container}>
      <div>
        <div className={s.todoName}>{state.header}</div>
        <textarea className={s.todoText} disabled value={state.text} readOnly>{state.text}</textarea>
      </div>
      <div>
        <button className={s.backToWork} onClick={() => onBackToCurrent()}></button>
      </div>
    </div>
  );
};
