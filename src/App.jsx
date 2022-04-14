import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./home/Home";
import Todos from "./tasks/components/Todos";
import Photos from "./photos/components/Photos";

import "./index.scss";

const App = () => {
  return (
    <>
      <header className="header">
        <div className="header__home header_link">
          <Link to="/">Home</Link>
        </div>
        <div className="header__todos header_link">
          <Link to="/todos">Todos</Link>
        </div>
        <div className="header__photos header_link">
          <Link to="/photos">Photos</Link>
        </div>
      </header>
      <Routes>
          <Route index element={<Home />} />
          <Route path="todos" element={<Todos />} />
          <Route path="photos" element={<Photos />} />
      </Routes>
    </>
  );
};

export default App;
