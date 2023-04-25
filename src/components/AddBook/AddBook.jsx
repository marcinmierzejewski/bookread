import { useState } from "react";
import { useAddBookMutation } from "../../redux/slices/bookApi";

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
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label>
            Book title
            <input
              type="text"
              name="title"
              required
              placeholder="Username"
              onChange={inputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Author
            <input
              type="text"
              name="author"
              required
              placeholder="Username"
              onChange={inputChange}
            />
          </label>
          <label>
            Publication date
            <input
              type="number"
              name="date"
              required
              placeholder="Username"
              onChange={inputChange}
            />
          </label>
          <label>
            Amount of pages
            <input
              type="number"
              name="pages"
              required
              placeholder="Username"
              onChange={inputChange}
            />
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
};
