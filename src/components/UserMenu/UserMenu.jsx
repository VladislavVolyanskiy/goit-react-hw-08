import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import {useNavigate} from 'react-router-dom'


const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
      dispatch(logout()).then(() => {
      navigate("/login");
    });
  };


  return (
    <div>
      <p>Welcome, {name} </p>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
};


export default UserMenu;
