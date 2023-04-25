import { BsBookHalf } from "react-icons/bs";
import { BookItemBox } from "./BookItem.styled";

export const BookItem = ({ id, title, author, year, pages, color }) => {
  // const [deleteContact] = useDeleteContactMutation();

  return (
    <BookItemBox color={color}>
      <p>
        <span>
          <BsBookHalf />
        </span> {title}
      </p>
      <p><span>Author: </span>{author}</p>
      <p><span>Year: </span>{year}</p>
      <p><span>Pages: </span>{pages}</p>
    </BookItemBox>
  );
};
