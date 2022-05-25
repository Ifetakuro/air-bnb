import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Baskets from "./Pages/Baskets"
import History from "./Pages/History"
import Profile from "./Pages/Profile"

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/baskets" element={<Baskets />} />
          <Route path="/history" element={<History />} />
          <Route path="/" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
