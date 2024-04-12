import { useState } from "react";
import HomeScreen from "./components/index.jsx";
import Register from "./components/register.jsx"
import Login from "./components/login.jsx"
import EmployeeForm from "./components/employee-form.jsx";
import Dashboard from "./components/dashboard.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
