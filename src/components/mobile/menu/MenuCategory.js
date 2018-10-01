import React from "react";
import Menu from "../home/Menu";
import "./menu-category.css";

const MenuCategory = () => {
  return (
    <div className="MenuCategory">
      <div className="container">
        <div className="container__top">
          <Menu />
          <div className="container__top__main-menu">
            <h3>Menu Principal</h3>
          </div>
          <div className="container__contents">
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
