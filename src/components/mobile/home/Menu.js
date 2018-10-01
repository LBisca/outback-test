import React from "react";
import "./style.css";

const Menu = () => {
  function dropMenu() {
    document.getElementById("page1").classList.toggle("move-down");
  }

  return (
    <div className="menu">
      <h1 className="menu__text" onClick={dropMenu}>
        Cardápio
      </h1>
    </div>
  );
};

export default Menu;
