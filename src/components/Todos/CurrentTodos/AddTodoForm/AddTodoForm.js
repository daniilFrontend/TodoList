import React, { useState } from "react";
import s from "./AddTodoForm.module.css";
import { addTodo } from "../../../../store/todoSlice";
import { useDispatch } from "react-redux";
export const AddTodoForm = ({ onAddForm }) => {
  const [headerValue, setHeaderValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const dispatch = useDispatch();
//Добавляем туду
  const onAddTodo = (e) => {
    e.preventDefault();
      dispatch(
        addTodo({
          header: headerValue,
          text: textValue,
        })
      );
      onAddForm(false);
  };
//Стейты для значений импутов
  const onHeaderChange = (e) => {
    setHeaderValue(e.target.value);
  };
  const onTextChange = (e) => {
    setTextValue(e.target.value);
  };
//Закрытие формы
  const onCloseForm = () => {
    onAddForm(false);
  };
  return (
    <form className={s.addTodoForm}>
      <div>
        <p>Name</p>
        <input className={s.todoName} value={headerValue} onChange={onHeaderChange} />
      </div>
      <div>
        <p>Description</p>
        <input value={textValue} onChange={onTextChange} />
      </div>
      <div className={s.buttonContainer}>
        <button className={s.addFormButton} onClick={(e) => onAddTodo(e)}>Add todo</button>
        <button className={s.addFormButton} onClick={onCloseForm}>Cancel</button>
      </div>
    </form>
  );
};
