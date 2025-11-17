
import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { useLocation } from "react-router";


export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
