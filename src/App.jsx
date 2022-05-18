import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Profile } from "./Components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Navbar } from "./Components/Navbar";
import { Tasks } from "./Components/TaskPage";
import "./index.css";
// import StatusLine from "./Components/StatusLine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        <Routes>
          <Route
            exact
            path="/profile"
            element={
              <>
                <Profile />
              </>
            }
          ></Route>
          <Route
            exact
            path="/TaskPage"
            element={
              <>
                <div className="flex">
                  <Profile />
                  <Tasks />
                </div>
              </>
            }
          ></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </header>
    </div>
  );
}
export default App;
