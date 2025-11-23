import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeUser from "./pages/user/HomeUser";
import HomeAdmin from "./pages/admin/HomeAdmin";
import Header from "./companents/Header";
import "./assets/css/index.css";
import Categories from "./companents/Categories";
import LoginAdmin from "./pages/admin/LoginAdmin";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeUser />} />
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/admin/login" element={<LoginAdmin />} />
      </Routes>
    </>
  );
}

export default App;
