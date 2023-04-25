// import { useGetAllUserBooksQuery } from "../../../redux/slices/bookApi";
// import { Loader } from "../../Loader/Loader";
import { BookItem } from "../BookItem/BookItem";
import testData from "./testData.json";
import { BooksListBox, BookListTitle, FirstLine } from "./BooksList.styled";

export const BooksList = () => {
  // const {
  //   data: { goingToRead, currentlyReading, finishedReading } = [],
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   error,
  // } = useGetAllUserBooksQuery();

  const { goingToRead, currentlyReading, finishedReading } = testData;

  return (
    <div>
      {/* {isLoading && <Loader />} */}
      {
        finishedReading.length > 0 && (
          <BooksListBox>
            <BookListTitle>Already read</BookListTitle>
            <FirstLine>
              <li>Book title</li>
              <li>Author</li>
              <li>Year</li>
              <li>Pages</li>
            </FirstLine>
            {finishedReading.map(
              ({ _id, title, author, publishYear, totalPages }) => (
                <BookItem
                  key={_id}
                  title={title}
                  author={author}
                  year={publishYear}
                  pages={totalPages}
                  color="already"
                />
              )
            )}
          </BooksListBox>
        )
        // : (
        //   <p> No contacts available </p>
        // )
      }

{
        currentlyReading.length > 0 && (
          <BooksListBox>
            <BookListTitle>Reading now</BookListTitle>
            <FirstLine>
              <li>Book title</li>
              <li>Author</li>
              <li>Year</li>
              <li>Pages</li>
            </FirstLine>
            {currentlyReading.map(
              ({ _id, title, author, publishYear, totalPages }) => (
                <BookItem
                  key={_id}
                  title={title}
                  author={author}
                  year={publishYear}
                  pages={totalPages}
                  color="reading"
                />
              )
            )}
          </BooksListBox>
        )
        // : (
        //   <p> No contacts available </p>
        // )
      }      



      {
        // isSuccess &&
        goingToRead.length > 0 && (
          <BooksListBox>
            <BookListTitle>Going to read</BookListTitle>
            <FirstLine>
              <li>Book title</li>
              <li>Author</li>
              <li>Year</li>
              <li>Pages</li>
            </FirstLine>
            {goingToRead.map(
              ({ _id, title, author, publishYear, totalPages }) => (
                <BookItem
                  key={_id}
                  title={title}
                  author={author}
                  year={publishYear}
                  pages={totalPages}
                  color="goingTo"
                />
              )
            )}
          </BooksListBox>
        )
      }

     

      {/* {isError && <p> Error: {error} </p>
      } */}
    </div>
  );
};
