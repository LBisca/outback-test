import React, { Component } from "react";
import Header from "./components/mobile/layout/Header";
import Home from "./components/mobile/home/Home";
import MenuCategory from "./components/mobile/menu/MenuCategory";
import Footer from "./components/mobile/layout/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App" id="page">
        <div className="pt-perspective">
          <div className="pt-page pt-page-1" id="page1">
            <Header />
            <Home />
            <Footer />
          </div>
          <div className="pt-page pt-page-2">
            <Header />
            <MenuCategory />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
