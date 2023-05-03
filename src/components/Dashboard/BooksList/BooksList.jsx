import {
  useGetAllUserBooksQuery,
  useLogoutMutation,
} from "../../../redux/slices/bookApi";
import { useDispatch } from "react-redux";
import { Loader } from "../../Loader/Loader";
import { BookItem } from "../BookItem/BookItem";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { deleteToken } from "../../../redux/slices/tokenSlice";
import { deleteUser } from "../../../redux/slices/userSlice";
// import testData from "./testData.json";
import { BooksListBox, BookListTitle, FirstLine } from "./BooksList.styled";

export const BooksList = () => {
  const {
    data: { goingToRead, currentlyReading, finishedReading } = [],
    isLoading,
    isSuccess,
    isError,
    // error,
  } = useGetAllUserBooksQuery();

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
  };

  // const { goingToRead, currentlyReading, finishedReading } = testData;

  return (
    <div>
      {isLoading && <Loader />}
      {isSuccess && finishedReading?.length > 0 && (
        <BooksListBox>
          <BookListTitle>Already read</BookListTitle>
          <FirstLine>
            <li>Book title</li>
            <li>Author</li>
            <li>Year</li>
            <li>Pages</li>
            <li>Rating</li>
          </FirstLine>
          {finishedReading.map(
            ({ _id, title, author, publishYear, pagesTotal, rating = 0 }) => (
              <BookItem
                key={_id}
                bookId={_id}
                title={title}
                author={author}
                year={publishYear}
                pages={pagesTotal}
                rating={rating}
                color="already"
                isResume={true}
              />
            )
          )}
        </BooksListBox>
      )}

      {isSuccess && currentlyReading?.length > 0 && (
        <BooksListBox>
          <BookListTitle>Reading now</BookListTitle>
          <FirstLine>
            <li>Book title</li>
            <li>Author</li>
            <li>Year</li>
            <li>Pages</li>
          </FirstLine>
          {currentlyReading.map(
            ({ _id, title, author, publishYear, pagesTotal }) => (
              <BookItem
                key={_id}
                bookId={_id}
                title={title}
                author={author}
                year={publishYear}
                pages={pagesTotal}
                color="reading"
                isResume={false}
              />
            )
          )}
        </BooksListBox>
      )}

      {isSuccess && goingToRead?.length > 0 && (
        <BooksListBox>
          <BookListTitle>Going to read</BookListTitle>
          <FirstLine>
            <li>Book title</li>
            <li>Author</li>
            <li>Year</li>
            <li>Pages</li>
          </FirstLine>
          {goingToRead.map(
            ({ _id, title, author, publishYear, pagesTotal }) => (
              <BookItem
                key={_id}
                bookId={_id}
                title={title}
                author={author}
                year={publishYear}
                pages={pagesTotal}
                color="goingTo"
                isResume={false}
              />
            )
          )}
        </BooksListBox>
      )}

      {isError && (
        <p>
          {" "}
          Error: <button onClick={logoutUser}> Logout </button>{" "}
        </p>
      )}
      {isSuccess &&
        !isError &&
        goingToRead?.length === 0 &&
        currentlyReading?.length === 0 &&
        finishedReading?.length === 0 && <p> No contacts available </p>}
    </div>
  );
};
