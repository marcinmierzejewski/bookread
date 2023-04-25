import { useSelector } from "react-redux";
import { AuthMenu } from "../AuthMenu/AuthMenu";
import { UserName } from "../UserName/UserName";
import { AppBarBox, Logo } from "./AppBar.styled";

export const AppBar = () => {
  const user = useSelector((state) => state.user);
  const isUserLogin = user.name;

  return (
    <AppBarBox>
      <Logo isUserLogin={isUserLogin}>BR</Logo>
      {isUserLogin && <UserName />}
      {isUserLogin && <AuthMenu />}
    </AppBarBox>
  );
};
