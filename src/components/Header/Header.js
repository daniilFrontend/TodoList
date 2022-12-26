import React from "react";
import { Link } from "react-router-dom";
import { HeaderButtons } from "../../UI/HeaderButtons/HeaderButtons";
import { ItemCard } from "../../UI/ItemCard/ItemCard";
import s from "./Header.module.css"

export const Header = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <ItemCard styles={"header-container"}>
      <HeaderButtons>
        <Link to="/" style={linkStyle} className={s.pContainer}>
          <p className={s.current}>Current</p>
        </Link>
      </HeaderButtons>
      <HeaderButtons>
        <Link to="/completed" className={s.pContainer} style={linkStyle}>
        <p className={s.completed} > Completed</p>
        </Link>
      </HeaderButtons>
      <HeaderButtons>
        <Link to="/deleted" className={s.pContainer} style={linkStyle}>
        <p className={s.deleted}>Deleted</p>
        </Link>
      </HeaderButtons>
    </ItemCard>
  );
};
