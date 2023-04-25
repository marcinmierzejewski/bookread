import styled from "styled-components";

const setBookColor = (color) => {
  switch (color) {
    case "already":
      return "#6D7A8D";

    case "reading":
      return "var(--color-accent)";

    case "goingTo":
      return "var(--color-grey)";

    default:
      return "var(--color-grey)";
  }
};

export const BookItemBox = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 62px;
  font-weight: 500;
  font-size: 14px;
  line-height: 38px;
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  > p:nth-child(1) {
    flex-grow: 6;
    width: 44%;
    display: flex;
    align-items: center;
    > svg {
      color: ${(props) => setBookColor(props.color)};
      width: 22px;
      height: 18px;
      margin-inline: 20px;
    }
  }
  > p:nth-child(2) {
    flex-grow: 4;
    width: 32%;
  }
  > p:nth-child(3) {
    flex-grow: 1;
    width: 10%;
  }
  > p:nth-child(4) {
    flex-grow: 1;
    width: 10%;
  }
`;
