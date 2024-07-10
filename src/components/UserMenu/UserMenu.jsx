import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'

const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const handleLogOut = () => {
      dispatch(logout());
  };

useEffect(() => {
  if (redirect) {
    navigate("/login");
    setRedirect(true)
  }
}, [redirect, navigate]);

      
  return (
    <div>
      <p>Welcome, {name} </p>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
};


export default UserMenu;
