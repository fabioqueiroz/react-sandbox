import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Comment } from "./components/comment/comment";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Comment />
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
