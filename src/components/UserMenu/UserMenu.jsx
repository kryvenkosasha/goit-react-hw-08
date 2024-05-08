import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const handleOnLogout = () => {
    dispatch(logout());
  };
  return (
    <div >
      <p >Welcome, {userData.name}</p>
      <button  onClick={handleOnLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
