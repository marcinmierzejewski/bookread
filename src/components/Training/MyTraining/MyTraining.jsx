import { useState } from "react";
import {
  useGetAllUserBooksQuery,
  useGetCurrentPlanningQuery,
  useStartPlanningMutation,
} from "../../../redux/slices/bookApi";
import Select from "react-select";
import { AddPages } from "../AddPages/AddPages";
import { Goals } from "../Goals/Goals";
import { BsCalendar4Week } from "react-icons/bs";
import { TrainingBookList } from "../TrainingBookList/TrainingBookList";

import { TrainingTitle, TrainingForm, AddTrainingBooks, SelectedBox} from "./MyTraining.styled";

export const MyTraining = () => {
  const {
    data: { goingToRead } = [],
    // isLoading,
    // isSuccess,
    // isError,
    // error,
  } = useGetAllUserBooksQuery();

  const {
    data: { planning } = [],
    // isLoading,
    isSuccess,
    // isError,
    // error,
  } = useGetCurrentPlanningQuery();

  const [startTraining] = useStartPlanningMutation();

  const renderLabel = () => {
    const rendering = [];
    goingToRead?.map(({ _id, title, author }) => {
      let label = { value: `${_id}`, label: `${title}: ${author}` };
      rendering.push(label);
      return label;
    });
    return rendering;
  };

  const [startDate, setStartDate] = useState("Start");
  const [stopDate, setStopDate] = useState("Finish");
  const [trainingBooks, setTrainingBooks] = useState([]);
  const [selectBook, setSelectBook] = useState("");

  const inputChange = (e) => {
    const { name, value } = e.target;
    if (name === "start") {
      setStartDate(value);
    }
    if (name === "stop") {
      setStopDate(value);
    }
  };

  const resetForm = () => {
    setStartDate("");
    setStopDate("");
  };

  const handleSelectedBook = (selectedBook) => {
    setSelectBook(selectedBook);
    console.log(`Selected: ${selectBook.value}`);
  };

  const handleAddBooksToTraining = async (e) => {
    e.preventDefault();
    goingToRead.map((book) => {
      if (book._id === selectBook.value) {
        console.log("find");
        console.log(book);
        setTrainingBooks((oldBooks) => [...oldBooks, book._id]);
      }
      return trainingBooks;
    });
  };

  const viewTrainingBook = goingToRead?.filter((b) =>
    trainingBooks.includes(b._id)
  );

  const deleteAddBook = (id) => {
    console.log(trainingBooks);

    console.log("Delete");
    setTrainingBooks(() => trainingBooks.filter((bk) => bk !== id));
    console.log(trainingBooks.map((b) => console.log("del", b, id)));
  };

  const handleSubmitStartPlanning = async (e) => {
    e.preventDefault();
    await startTraining({
      startDate: startDate,
      endDate: stopDate,
      books: trainingBooks,
    });

    resetForm();
  };

  return (
    <>
      <div>
        Contdown
        {isSuccess && planning && (
          <div>
            <p>Start date: {planning.startDate}</p>
            <p>Start date: {planning.endDate}</p>
          </div>
        )}
      </div>
      <Goals
        trainingBooks={trainingBooks}
        planning={planning}
        startDate={startDate}
        endDate={stopDate}
      />
      <TrainingTitle>My Training</TrainingTitle>

      <TrainingForm onSubmit={handleSubmitStartPlanning}>
        <div>
          <div>
            <input
              type="text"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              name="start"
              value={startDate}
              required
              placeholder="Start"
              onChange={inputChange}
            />
            <span>
              <BsCalendar4Week />
            </span>
          </div>
          <div>
            <input
              type="text"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              name="stop"
              value={stopDate}
              required
              placeholder="Finish"
              onChange={inputChange}
            />
            <span>
              <BsCalendar4Week />
            </span>
          </div>
        </div>

        <AddTrainingBooks>
          <SelectedBox>
            <Select options={renderLabel()} onChange={handleSelectedBook} />
            <button type="submit" onClick={handleAddBooksToTraining}>
              Add
            </button>
          </SelectedBox>
          <div>
            {/* {viewTrainingBook?.map(({ _id, title, author }) => (
              <li key={_id}>
                {title} {author}{" "}
                <button type="button" onClick={() => deleteAddBook(_id)}>
                  delete
                </button>
              </li>
            ))} */}
            <TrainingBookList
              viewTrainingBook={viewTrainingBook}
              deleteAddBook={deleteAddBook}
            />
          </div>
        </AddTrainingBooks>
        <div>{selectBook && <>You've selected {selectBook.value}</>}</div>
        {viewTrainingBook?.length > 0 && (
          <button type="submit">Start planning</button>
        )}
      </TrainingForm>
      <div>
        BOOKS
        {isSuccess &&
          planning.books?.map(({ _id, title, pagesTotal, pagesFinished }) => (
            <p key={_id}>
              title: {title}
              totalPages: {pagesTotal}
              finishedPages: {pagesFinished}
            </p>
          ))}
      </div>
      <AddPages />
      {/* <p>{goingToRead}</p> */}
    </>
  );
};
