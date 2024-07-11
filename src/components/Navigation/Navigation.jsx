import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import clsx from "clsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <nav className={css.mainNavigation}>
      <ul>
        <li>
          <NavLink className={getLinkClass} to='/'>Home</NavLink>
        </li>
        {isLoggedIn && (
        <li>
          <NavLink className={getLinkClass} to='/contacts'>Contacts</NavLink>
        </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation
