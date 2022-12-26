import React, { useState } from "react";
import s from "./CurrentList.module.css";
import {
  deleteTodo,
  editTodo,
  changeStatus,
} from "../../../../store/todoSlice";
import { useDispatch } from "react-redux";

export const CurrentList = ({ state, index }) => {
  const [editInput, seteditInput] = useState(false);
  const [todoHeader, setTodoHeader] = useState(state.header);
  const [todoText, setTodoText] = useState(state.text);

  const deleteItem = useDispatch();
  const editItem = useDispatch();
  const switchStatus = useDispatch();

  //Смена статуса и его отправка

  const onChangeStatus = () => {
    switchStatus(
      changeStatus({
        index,
      })
    );
    console.log(state.check);
  };

  //  Удаление
  const onDeleteTodo = () => {
    deleteItem(
      deleteTodo({
        index,
      })
    );
  };

  // Редактирование
  const onStartEditForm = (value) => {
    seteditInput(value);
  };

  const onEditTodo = () => {
    editItem(
      editTodo({
        header: todoHeader,
        text: todoText,
        index,
      })
    );
    seteditInput(false);
  };

  const onTextChange = (e) => {
    setTodoText(e.target.value);
  };

  const onHeaderChange = (e) => {
    setTodoHeader(e.target.value);
  };
  //Ниже много тернарников полунечитаемых, но по сути все зависит от локального стейта. 
//Все сделано для функции редактирования
  return (
    <div className={s.listContainer}>
      <input
        disabled={editInput ? "disabled" : ""}
        type="checkbox"
        onChange={()=>{"avoid react warning"}}
        checked={state.check}
        className={s.itemCheck}
        onClick={onChangeStatus}
      ></input>
      <div className={s.todoValue}>
        <div className={s.todoName}>
          {editInput ? (
            <input value={todoHeader} onChange={(e) => onHeaderChange(e)} />
          ) : (
            <p>{state.header}</p>
          )}
        </div>
        <div className={s.todoText}>
          {editInput ? (
            <input
              className={s.editTexpInput}
              value={todoText}
              onChange={(e) => onTextChange(e)}
            />
          ) : (
            <textarea className={s.todoTextArea} value={state.text} disabled />
          )}
        </div>
      </div>
      <div className={s.editButtonsContainer}>
        {editInput ? (
          <button
            onClick={onEditTodo}
            className={s.editButtons}
            style={{ backgroundColor: "hwb(125 10% 0% / 0.623)" }}
          >
            Accept
          </button>
        ) : (
          <button
            className={s.buttonEdit}
            onClick={() => onStartEditForm(true)}
          ></button>
        )}
        {editInput ? (
          <button
            onClick={() => onStartEditForm(false)}
            className={s.editButtons}
            style={{ backgroundColor: "hsla(0, 100%, 50%, 0.623)" }}
          >
            Cancel
          </button>
        ) : (
          <button className={s.buttonDelete} onClick={onDeleteTodo}></button>
        )}
      </div>
    </div>
  );
};
