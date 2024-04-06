import { Navigate } from "react-router-dom";

export default function PrivateRoutes({ children }) {
  const isAuthenticated = localStorage.getItem("token") != null ? true : false;

  return isAuthenticated ? children : <Navigate to={"/login"} />;
}
