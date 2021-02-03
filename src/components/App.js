import { BrowserRouter } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./SearchBar/SearchBar";
import WeatherList from "./WeatherList/WeatherList";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <div className="ui container">
          <SearchBar />
          <WeatherList />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
