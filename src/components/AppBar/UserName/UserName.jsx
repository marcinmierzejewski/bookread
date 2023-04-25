import { useSelector } from "react-redux";
import { UserNameBox, FirstNameLetter } from "./UserName.styled";

export const UserName = () => {
  const user = useSelector((state) => state.user);

  return (
    <UserNameBox>
      <FirstNameLetter>{user.name[0]}</FirstNameLetter>
      {user.name}
    </UserNameBox>
  );
};
