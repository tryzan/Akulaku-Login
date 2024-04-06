import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./index.css";
import Dashboard from "./pages/Dashoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./component/PrivateRoutes";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route
            element={
              <PrivateRoutes>
                <Dashboard />
              </PrivateRoutes>
            }
            path="/dashboard"
          />
        </Routes>
      </Router>
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
