import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, isAuthReady } = useSelector((state) => state.user);

  if (!isAuthReady) return <p></p>;
  if (!user) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
