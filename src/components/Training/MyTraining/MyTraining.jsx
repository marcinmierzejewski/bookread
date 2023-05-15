import { useState } from "react";

export const MyTraining = () => {
  const [startDate, setStartDate] = useState("");
  const [stopDate, setStopDate] = useState("");
  const [trainingBooks, setTrainingBooks] = useState([]);

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
    startDate("");
    stopDate("");
  };

  const handleAddBooksToTraining = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <p>My Training</p>
      <form>
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
      </form>
    </>
  );
};
