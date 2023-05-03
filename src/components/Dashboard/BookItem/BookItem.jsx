import { useState } from "react";
import { ResumeModal } from "../ResumeModal/ResumeModal";
import { ConfirmCancelModal } from "../../ConfirmCancelModal/ConfirmCancelModal";
import { BsBookHalf } from "react-icons/bs";
import { Rating } from "react-simple-star-rating";
import { ResumeBox, BookItemBox } from "./BookItem.styled";
import { useDeleteBookMutation } from "../../../redux/slices/bookApi";

export const BookItem = ({
  bookId,
  title,
  author,
  year,
  pages,
  rating,
  color,
  isResume,
}) => {
  const [deleteBook] = useDeleteBookMutation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <BookItemBox color={color} isResume={isResume} >
      <p onClick={()=>setIsDeleteOpen(true)}>
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
        <ResumeModal isOpen={isOpen} setIsOpen={setIsOpen} bookId={bookId}/>
      </ResumeBox>
      <ConfirmCancelModal
        isDeleteOpen={isDeleteOpen}
        modalContent={`Delete ${title}?`}
        nameOfConfirm="Delete"
        setIsDeleteOpen={setIsDeleteOpen}
        confirmingModalAction={() => deleteBook(bookId)}
       />
    </BookItemBox>
  );
};
