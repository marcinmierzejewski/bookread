import { GoalsWrapper, GoalsTitle, GoalsContent } from "./Goals.styled";

export const Goals = ({ trainingBooks, startDate, endDate, planning }) => {
 
  const amountOfDays = (startDate, endDate) => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const days = end / 1000 / 3600 / 24 - start / 1000 / 3600 / 24;
    return days;
  };

  return (
    <GoalsWrapper>
      <GoalsTitle>My goals</GoalsTitle>
      <GoalsContent>
        <li>
          {planning ? (
            <span>{planning.books.length}</span>
          ) : (
            <span>{trainingBooks.length}</span>
          )}
          <p>Amount of book</p>
        </li>
        <li>
          {planning ? (
            <span>{amountOfDays(planning?.startDate, planning?.endDate)}</span>
          ) : (
            <span>{amountOfDays(startDate, endDate)}</span>
          )}
          <p>Amount of day</p>
        </li>
      </GoalsContent>
    </GoalsWrapper>
  );
};
