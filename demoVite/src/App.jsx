import { useState } from "react";
import HomeScreen from "./components/index.jsx";
import Register from "./components/register.jsx";
import Login from "./components/login.jsx";
import EmployeeForm from "./components/employee-form.jsx";
import Dashboard from "./components/dashboard.jsx";
import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";

import "./App.css";
import ThankYou from "./components/thankyou.jsx";

function App() {
  const [user, setUser] = useState({});
  const [isAuthenticated, setAuthentication] = useState(false);

  function getUser(user_info) {
    if (user_info.username === "admin") {
      setAuthentication(true)
    }
    setUser(user_info);
  }
  const PrivateWrapper = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<Login sendUserToApp={getUser} />} />
          <Route
            path="/register"
            element={<Register sendUserToApp={getUser} />}
          />
          <Route element={<PrivateWrapper />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>{" "}
          <Route path="/form" element={<EmployeeForm currentUser={user} />} />
          <Route path="/thankyou" element={<ThankYou/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
