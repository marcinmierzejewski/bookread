import { useSelector } from "react-redux";
import { AuthMenu } from "../AuthMenu/AuthMenu";
import { AppBarBox, Logo } from "./AppBar.styled";

export const AppBar = () => {
  const user = useSelector((state) => state.user);
  const isUserLogin = user.name;

  return (
    <AppBarBox>
      <Logo isUserLogin={isUserLogin}>BR</Logo>
      {isUserLogin && <AuthMenu />}
    </AppBarBox>
  );
};
