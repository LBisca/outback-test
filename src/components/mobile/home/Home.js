import React from "react";
import Menu from "./Menu";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="container__body">
          <Menu />
          <div className="container__body__main" />
        </div>

        <div className="container__gift">
          <div className="container__gift__contents" />
        </div>
        <div className="container__foot">
          <div className="container__foot__research" />
          <div className="container__foot__club" />
        </div>
      </div>
    </div>
  );
};

export default Home;
