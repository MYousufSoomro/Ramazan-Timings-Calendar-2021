import React, { Component } from "react";
import "./App.css";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import CityCards from "./components/CityCards";
import DuaCards from "./components/DuaCards";

class App extends Component {

  render() {

    return (
      <div>
        <Appbar Title="Ramzan Calender 2021"/>
        <CityCards />
        <hr / >
        <DuaCards />
        <Footer />
      </div>
    );
  }
}

export default App;
