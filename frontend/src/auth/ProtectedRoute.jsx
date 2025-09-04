import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("access");
  return token ? children : <Navigate to="/" />;
}
// This component checks if the user is authenticated by looking for a token in localStorage.