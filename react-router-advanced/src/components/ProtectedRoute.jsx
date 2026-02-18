import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ isAuth, children }) {
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}

import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { isAuth } = useAuth();  // ✅ now using useAuth

  if (!isAuth) return <Navigate to="/login" />;
  return children;
}
