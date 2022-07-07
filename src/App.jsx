import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import ExtractNounsVerbs from "./components/extractNounsVerbs";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/extractNounsVerbs" element={<ExtractNounsVerbs />} />
          </Routes>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
