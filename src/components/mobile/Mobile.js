import React, { Component } from "react";
import Menu from "./home/Menu";
import MainBlock from "./home/MainBlock";
import "./style.css";

export default class Mobile extends Component {
  render() {
    return (
      <div className="container">
        <div className="container__body">
          <Menu />
          <MainBlock />
        </div>
        <div className="container__gift">
          <div className="container__gift__contents" />
        </div>
        <div className="container__foot">
          <div className="research" />
        </div>
      </div>
    );
  }
}
