import React from "react";
import Home from "./components/Home/Home";
import Cursor from "./assets/Cursor";
import TopDown from "./assets/TopDown";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./assets/Sidebar/Sidebar";
import WorkInside from "./components/Work_Inside/WorkInside";

const App = () => {
  return (
    <div>
      <Router>
        <Cursor />
        <TopDown />
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/works/:id" element={<WorkInside />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
