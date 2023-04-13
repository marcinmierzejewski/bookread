import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useLogoutMutation } from "../../../redux/slices/bookApi";
import { deleteToken } from "../../../redux/slices/tokenSlice";
import { deleteUser } from "../../../redux/slices/userSlice";
import { BsBookHalf, BsHouseDoor } from "react-icons/bs";
import { AuthMenuBox, Link, IconBox, Letter, LogoutButton } from "./AuthMenu.styled";

export const AuthMenu = () => {
  const user = useSelector((state) => state.user);

  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = async () => {
    await Cookies.remove("token");
    await logout().then(() => {
      dispatch(deleteUser());
      dispatch(deleteToken());
    });
    await navigate("/");
  }

  return (
    <AuthMenuBox>
      <IconBox>
        <Link to="/training">
          <BsBookHalf />
        </Link>
        <Link to="/">
          <BsHouseDoor />
        </Link>
      </IconBox>
      {user.name && <Letter>{user.name[0]}</Letter>}
      <LogoutButton onClick={logoutUser}>Logout</LogoutButton>
    </AuthMenuBox>
  );
};
