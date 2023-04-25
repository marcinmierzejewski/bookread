import { BsBookHalf } from "react-icons/bs";
import { BookItemBox } from "./BookItem.styled";

export const BookItem = ({ id, title, author, year, pages, color }) => {
  // const [deleteContact] = useDeleteContactMutation();

  return (
    <BookItemBox color={color}>
      <p>
        <BsBookHalf /> {title}
      </p>
      <p>{author}</p>
      <p>{year}</p>
      <p>{pages}</p>
    </BookItemBox>
  );
};
