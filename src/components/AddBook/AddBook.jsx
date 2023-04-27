import { useState } from "react";
import { useAddBookMutation } from "../../redux/slices/bookApi";
import { AddForm, TitleBox, BookItem, AddBookBtn } from "./AddBook.styled";

export const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [pagesTotal, setPagesTotal] = useState("");

  const [addNewBook] = useAddBookMutation();

  const inputChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    }
    if (name === "author") {
      setAuthor(value);
    }
    if (name === "date") {
      setPublishYear(value);
    }
    if (name === "pages") {
      setPagesTotal(value);
    }
  };

  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setPublishYear("");
    setPagesTotal("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addNewBook({ title, author, publishYear, pagesTotal })
      .unwrap()
      .then(() => {
        console.log(`add book: ${title}`);
        resetForm();
      })
      .catch(() => {
        console.log("Error");
      });    
  };

  return (
    <>
      <AddForm onSubmit={handleSubmit} autoComplete="off">
        <TitleBox>
          <label>
            Book title
            <input
              type="text"
              name="title"
              required
              placeholder="..."
              onChange={inputChange}
            />
          </label>
        </TitleBox>
        <BookItem>
          <label>
            Author
            <input
              type="text"
              name="author"
              required
              placeholder="..."
              onChange={inputChange}
            />
          </label>
          <label>
            Publication date
            <input
              type="number"
              name="date"
              required
              placeholder="..."
              onChange={inputChange}
            />
          </label>
          <label>
            Amount of pages
            <input
              type="number"
              name="pages"
              required
              placeholder="..."
              onChange={inputChange}
            />
          </label>
        </BookItem>
        <AddBookBtn type="submit">Add</AddBookBtn>
      </AddForm>
    </>
  );
};
