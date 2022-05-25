import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "./App";
const useAuth = () => {
  const { user } = useContext(UserContext);
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const location = useLocation();
  const isAuth = useAuth();

  console.log(JSON.parse(localStorage.getItem("user")));
  const loggedIn = JSON.parse(localStorage.getItem("user"))["loggedIn"];
  // console.log(localStorage.JSON.parse(localStorage.getItem("user")));
  return loggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
