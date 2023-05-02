import { useState } from "react";
import { ResumeModal } from "../ResumeModal/ResumeModal";
import { BsBookHalf } from "react-icons/bs";
import { Rating } from "react-simple-star-rating";
import { ResumeBox, BookItemBox } from "./BookItem.styled";

export const BookItem = ({
  id,
  title,
  author,
  year,
  pages,
  rating,
  color,
  isResume,
}) => {
  // const [deleteContact] = useDeleteContactMutation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BookItemBox color={color} isResume={isResume}>
      <p>
        <span>
          <BsBookHalf />
        </span>{" "}
        {title}
      </p>
      <p>
        <span>Author: </span>
        {author}
      </p>
      <p>
        <span>Year: </span>
        {year}
      </p>
      <p>
        <span>Pages: </span>
        {pages}
      </p>
      <ResumeBox isResume={isResume}>
        <p>
          <span>Rating: </span>
          <Rating
            initialValue={rating}
            readonly={true}
            size={24}
            fillColor="var(--color-accent)"
          />
        </p>
        <button onClick={() => setIsOpen(true)}>Resume</button>
        <ResumeModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </ResumeBox>
    </BookItemBox>
  );
};
