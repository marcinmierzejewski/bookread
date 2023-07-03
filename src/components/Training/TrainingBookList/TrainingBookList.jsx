import { BsBookHalf } from "react-icons/bs";
import { FirstLine, BookItemBox } from "./TrainingBookList.styled";

export const TrainingBookList = ({ viewTrainingBook, deleteAddBook }) => {
  return (
    <div>
      <FirstLine>
        <li>Book title</li>
        <li>Author</li>
        <li>Year</li>
        <li>Pages</li>
      </FirstLine>
      {viewTrainingBook?.map(
            ({ _id, title, author, publishYear, pagesTotal }) => (
              
              <BookItemBox key={_id}>
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
                {publishYear}
              </p>
              <p>
                <span>Pages: </span>
                {pagesTotal}
              </p>
              <button type="button" onClick={() => deleteAddBook(_id)}>
                  delete
                </button>
            </BookItemBox>
            )
          )}
    </div>
  );
};
