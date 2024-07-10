import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { selectAuth } from "../../redux/auth/selectors";

const RestrictedRoute = () => {
  const { isLoggedIn, token } = useSelector(selectAuth);

  if (!isLoggedIn && token) {
    return <p>Loading . . .</p>;
  }

  if (isLoggedIn && token) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default RestrictedRoute;
